<?php
// api_orders.php - Handles ORDERS, TRACKING, and AGENT assignments
require 'core.php';
$input = getInput();

// GET /orders
if ($method === 'GET' && empty($segments[0])) {
    $stmt = $pdo->query("SELECT * FROM orders ORDER BY created_at DESC");
    sendJson($stmt->fetchAll());
}

// POST /orders (Complex Transaction: Order + Order Items + Stock Reduction)
elseif ($method === 'POST' && empty($segments[0])) {
    $orderId = "ORD-" . rand(1000, 9999);
    
    try {
        $pdo->beginTransaction();
        
        // 1. Insert into main orders table
        $stmt = $pdo->prepare("INSERT INTO orders (id, customer, customer_id, rest_id, rest_name, items, amount, status, order_date, order_time) VALUES (?, ?, ?, ?, ?, ?, ?, 'PLACED', DATE_FORMAT(NOW(), '%b %d'), 'Just now')");
        $stmt->execute([$orderId, $input['customer_name'], $input['customer_id'], $input['rest_id'], $input['rest_name'], $input['items_summary'], $input['total_amount']]);
        
        // 2. Loop and populate order_items + reduce stock
        foreach ($input['items'] as $item) {
            // Insert Item
            $stmtItem = $pdo->prepare("INSERT INTO order_items (order_id, menu_item_id, name, quantity, unit_price, total_price) VALUES (?, ?, ?, ?, ?, ?)");
            $stmtItem->execute([$orderId, $item['id'], $item['name'], $item['qty'], $item['price'], ($item['qty'] * $item['price'])]);
            
            // Reduce Stock
            $stmtStock = $pdo->prepare("UPDATE menu_items SET stock = stock - ? WHERE id = ? AND stock >= ?");
            $stmtStock->execute([$item['qty'], $item['id'], $item['qty']]);
        }
        
        // 3. Update User Metrics
        $stmtUser = $pdo->prepare("UPDATE users SET orders = orders + 1, spent = spent + ? WHERE id = ?");
        $stmtUser->execute([$input['total_amount'], $input['customer_id']]);

        // 4. Update Restaurant Metrics
        $stmtRest = $pdo->prepare("UPDATE restaurants SET orders = orders + 1, rev = rev + ? WHERE id = ?");
        $stmtRest->execute([$input['total_amount'], $input['rest_id']]);

        $pdo->commit();
        sendJson(['status' => 'success', 'order_id' => $orderId]);
    } catch (Exception $e) {
        $pdo->rollBack();
        sendJson(['status' => 'error', 'message' => $e->getMessage()], 500);
    }
}

// GET /orders/customer/{customerId}
elseif ($method === 'GET' && isset($segments[0]) && $segments[0] === 'customer') {
    $stmt = $pdo->prepare("SELECT * FROM orders WHERE customer_id = ? ORDER BY created_at DESC");
    $stmt->execute([$segments[1]]);
    sendJson($stmt->fetchAll());
}

// GET /orders/restaurant/{restaurantId}
elseif ($method === 'GET' && isset($segments[0]) && $segments[0] === 'restaurant') {
    $stmt = $pdo->prepare("SELECT * FROM orders WHERE rest_id = ? ORDER BY created_at DESC");
    $stmt->execute([$segments[1]]);
    sendJson($stmt->fetchAll());
}

// --- Specific Order Endpoints: /orders/{id} ---
elseif (isset($segments[0])) {
    $orderId = $segments[0];

    // GET /orders/{id}
    if ($method === 'GET' && empty($segments[1])) {
        $stmt = $pdo->prepare("SELECT * FROM orders WHERE id = ?");
        $stmt->execute([$orderId]);
        $order = $stmt->fetch();
        
        // Also fetch detailed items
        $stmtItems = $pdo->prepare("SELECT * FROM order_items WHERE order_id = ?");
        $stmtItems->execute([$orderId]);
        $order['detailed_items'] = $stmtItems->fetchAll();
        
        sendJson($order);
    }
    
    // PATCH /orders/{id}/status
    elseif ($method === 'PATCH' && isset($segments[1]) && $segments[1] === 'status') {
        $validStatuses = ['PLACED','CONFIRMED','PREPARING','OUT_FOR_DELIVERY','DELIVERED','CANCELLED'];
        if (!in_array($input['status'], $validStatuses)) {
            sendJson(['error' => 'Invalid status enum'], 400);
        }
        $stmt = $pdo->prepare("UPDATE orders SET status = ? WHERE id = ?");
        $stmt->execute([$input['status'], $orderId]);
        sendJson(['status' => 'success']);
    }

    // PATCH /orders/{id}/agent
    elseif ($method === 'PATCH' && isset($segments[1]) && $segments[1] === 'agent') {
        $stmt = $pdo->prepare("UPDATE orders SET agent_id = ? WHERE id = ?");
        $stmt->execute([$input['agent_id'], $orderId]);
        sendJson(['status' => 'success']);
    }

    // GET /orders/{id}/track
    elseif ($method === 'GET' && isset($segments[1]) && $segments[1] === 'track') {
        $stmt = $pdo->prepare("SELECT o.status, o.agent_id, a.name as agent_name, a.phone as agent_phone FROM orders o LEFT JOIN agents a ON o.agent_id = a.id WHERE o.id = ?");
        $stmt->execute([$orderId]);
        sendJson($stmt->fetch());
    }

    // GET /orders/{id}/status-log (Mocking a log based on current status since no log table exists in schema)
    elseif ($method === 'GET' && isset($segments[1]) && $segments[1] === 'status-log') {
        $stmt = $pdo->prepare("SELECT status, created_at FROM orders WHERE id = ?");
        $stmt->execute([$orderId]);
        $order = $stmt->fetch();
        
        // Generating sequential log up to current status
        $all = ['PLACED','CONFIRMED','PREPARING','OUT_FOR_DELIVERY','DELIVERED'];
        $log = [];
        foreach ($all as $s) {
            $log[] = ['status' => $s, 'time' => $order['created_at']];
            if ($s === $order['status']) break;
        }
        sendJson($log);
    }

    // POST /orders/{id}/rating
    elseif ($method === 'POST' && isset($segments[1]) && $segments[1] === 'rating') {
        $stmt = $pdo->prepare("INSERT INTO ratings (customer_id, restaurant_id, order_id, stars, comment) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$input['customer_id'], $input['restaurant_id'], $orderId, $input['stars'], $input['comment']]);
        sendJson(['status' => 'success']);
    }
}

sendJson(['error' => 'Endpoint not found'], 404);
?>