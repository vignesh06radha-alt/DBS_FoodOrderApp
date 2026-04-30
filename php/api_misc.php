<?php
// api_misc.php - Handles CART, PROMOS, NOTIFICATIONS, and AGENTS
require 'core.php';
$input = getInput();
session_start();

// --- NOTIFICATIONS ---
if ($segments[0] === 'notifications') {
    
    // GET /notifications
    if ($method === 'GET' && empty($segments[1])) {
        $role = $_GET['role'] ?? 'customer'; // Default query filter
        $stmt = $pdo->prepare("SELECT * FROM notifications WHERE role = ? ORDER BY id DESC LIMIT 20");
        $stmt->execute([$role]);
        sendJson($stmt->fetchAll());
    }
    
    // PATCH /notifications/read-all
    elseif ($method === 'PATCH' && isset($segments[1]) && $segments[1] === 'read-all') {
        $role = $input['role'] ?? 'customer';
        $stmt = $pdo->prepare("UPDATE notifications SET is_read = 1 WHERE role = ?");
        $stmt->execute([$role]);
        sendJson(['status' => 'success']);
    }

    // PATCH /notifications/{id}/read
    elseif ($method === 'PATCH' && isset($segments[1]) && is_numeric($segments[1]) && isset($segments[2]) && $segments[2] === 'read') {
        $stmt = $pdo->prepare("UPDATE notifications SET is_read = 1 WHERE id = ?");
        $stmt->execute([$segments[1]]);
        sendJson(['status' => 'success']);
    }
}

// --- PROMOS ---
elseif ($segments[0] === 'promos') {
    
    // POST /promos/validate
    if ($method === 'POST' && isset($segments[1]) && $segments[1] === 'validate') {
        $stmt = $pdo->prepare("SELECT * FROM promos WHERE code = ?");
        $stmt->execute([strtoupper($input['code'])]);
        $promo = $stmt->fetch();
        
        if ($promo) {
            sendJson(['status' => 'valid', 'promo' => $promo]);
        } else {
            sendJson(['status' => 'invalid', 'message' => 'Invalid promo code'], 400);
        }
    }
}

// --- DELIVERY AGENTS ---
elseif ($segments[0] === 'agents') {
    
    // GET /agents
    if ($method === 'GET' && empty($segments[1])) {
        $stmt = $pdo->query("SELECT * FROM agents");
        sendJson($stmt->fetchAll());
    }
    
    // GET /agents/{id}
    elseif ($method === 'GET' && isset($segments[1])) {
        $stmt = $pdo->prepare("SELECT * FROM agents WHERE id = ?");
        $stmt->execute([$segments[1]]);
        sendJson($stmt->fetch());
    }
}

// --- CART (Session-based fallback since it doesn't exist in DB schema) ---
elseif ($segments[0] === 'cart') {
    if (!isset($_SESSION['cart'])) {
        $_SESSION['cart'] = [];
    }

    // GET /cart
    if ($method === 'GET' && empty($segments[1])) {
        sendJson(array_values($_SESSION['cart']));
    }
    
    // POST /cart/items
    elseif ($method === 'POST' && isset($segments[1]) && $segments[1] === 'items') {
        $itemId = $input['item_id'];
        $_SESSION['cart'][$itemId] = $input; // Store item payload
        sendJson(['status' => 'success', 'cart' => array_values($_SESSION['cart'])]);
    }
    
    // PUT /cart/items/{itemId}
    elseif ($method === 'PUT' && isset($segments[1]) && $segments[1] === 'items' && isset($segments[2])) {
        $itemId = $segments[2];
        if (isset($_SESSION['cart'][$itemId])) {
            $_SESSION['cart'][$itemId]['qty'] = $input['qty'];
        }
        sendJson(['status' => 'success']);
    }
    
    // DELETE /cart/items/{itemId}
    elseif ($method === 'DELETE' && isset($segments[1]) && $segments[1] === 'items' && isset($segments[2])) {
        unset($_SESSION['cart'][$segments[2]]);
        sendJson(['status' => 'success']);
    }
    
    // DELETE /cart
    elseif ($method === 'DELETE' && empty($segments[1])) {
        $_SESSION['cart'] = [];
        sendJson(['status' => 'success']);
    }
}

sendJson(['error' => 'Endpoint not found'], 404);
?>