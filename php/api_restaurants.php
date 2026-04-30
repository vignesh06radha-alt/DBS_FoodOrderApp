<?php
// api_restaurants.php - Handles RESTAURANTS, MENU ITEMS, and RESTAURANT RATINGS
require 'core.php';
$input = getInput();

// GET /restaurants
if ($method === 'GET' && empty($segments[0])) {
    $stmt = $pdo->query("SELECT * FROM restaurants");
    sendJson($stmt->fetchAll());
}

// POST /restaurants
elseif ($method === 'POST' && empty($segments[0])) {
    $stmt = $pdo->prepare("INSERT INTO restaurants (name, cuisine, emoji, owner) VALUES (?, ?, ?, ?)");
    $stmt->execute([$input['name'], $input['cuisine'], $input['emoji'], $input['owner']]);
    sendJson(['status' => 'success', 'id' => $pdo->lastInsertId()]);
}

// --- Specific Restaurant Endpoints ---
if (isset($segments[0]) && is_numeric($segments[0])) {
    $restId = $segments[0];

    // GET /restaurants/{id}
    if ($method === 'GET' && empty($segments[1])) {
        $stmt = $pdo->prepare("SELECT * FROM restaurants WHERE id = ?");
        $stmt->execute([$restId]);
        sendJson($stmt->fetch());
    }
    
    // PUT /restaurants/{id}
    elseif ($method === 'PUT' && empty($segments[1])) {
        $stmt = $pdo->prepare("UPDATE restaurants SET name=?, cuisine=?, emoji=?, time=? WHERE id=?");
        $stmt->execute([$input['name'], $input['cuisine'], $input['emoji'], $input['time'], $restId]);
        sendJson(['status' => 'success']);
    }

    // PATCH /restaurants/{id}/status
    elseif ($method === 'PATCH' && isset($segments[1]) && $segments[1] === 'status') {
        $stmt = $pdo->prepare("UPDATE restaurants SET active=? WHERE id=?");
        $stmt->execute([$input['active'], $restId]);
        sendJson(['status' => 'success']);
    }

    // DELETE /restaurants/{id}
    elseif ($method === 'DELETE' && empty($segments[1])) {
        $stmt = $pdo->prepare("DELETE FROM restaurants WHERE id=?");
        $stmt->execute([$restId]);
        sendJson(['status' => 'success']);
    }

    // --- MENU ITEMS ---
    elseif (isset($segments[1]) && $segments[1] === 'menu') {
        
        // GET /restaurants/{id}/menu
        if ($method === 'GET' && empty($segments[2])) {
            $stmt = $pdo->prepare("SELECT * FROM menu_items WHERE restaurant_id = ?");
            $stmt->execute([$restId]);
            sendJson($stmt->fetchAll());
        }
        
        // POST /restaurants/{id}/menu
        elseif ($method === 'POST' && empty($segments[2])) {
            $stmt = $pdo->prepare("INSERT INTO menu_items (restaurant_id, name, category, price, stock, description) VALUES (?, ?, ?, ?, ?, ?)");
            $stmt->execute([$restId, $input['name'], $input['category'], $input['price'], $input['stock'], $input['description']]);
            sendJson(['status' => 'success', 'id' => $pdo->lastInsertId()]);
        }
        
        // Specific Menu Item Logic: /restaurants/{id}/menu/{itemId}
        elseif (isset($segments[2]) && is_numeric($segments[2])) {
            $itemId = $segments[2];

            // GET /restaurants/{id}/menu/{itemId}
            if ($method === 'GET' && empty($segments[3])) {
                $stmt = $pdo->prepare("SELECT * FROM menu_items WHERE id = ? AND restaurant_id = ?");
                $stmt->execute([$itemId, $restId]);
                sendJson($stmt->fetch());
            }

            // PUT /restaurants/{id}/menu/{itemId}
            elseif ($method === 'PUT' && empty($segments[3])) {
                $stmt = $pdo->prepare("UPDATE menu_items SET name=?, category=?, price=?, stock=?, description=? WHERE id=? AND restaurant_id=?");
                $stmt->execute([$input['name'], $input['category'], $input['price'], $input['stock'], $input['description'], $itemId, $restId]);
                sendJson(['status' => 'success']);
            }

            // PATCH /restaurants/{id}/menu/{itemId}/availability
            elseif ($method === 'PATCH' && isset($segments[3]) && $segments[3] === 'availability') {
                $stmt = $pdo->prepare("UPDATE menu_items SET available=? WHERE id=? AND restaurant_id=?");
                $stmt->execute([$input['available'], $itemId, $restId]);
                sendJson(['status' => 'success']);
            }

            // DELETE /restaurants/{id}/menu/{itemId}
            elseif ($method === 'DELETE' && empty($segments[3])) {
                $stmt = $pdo->prepare("DELETE FROM menu_items WHERE id=? AND restaurant_id=?");
                $stmt->execute([$itemId, $restId]);
                sendJson(['status' => 'success']);
            }
        }
    }
    
    // --- RATINGS & REVIEWS ---
    // GET /restaurants/{id}/ratings
    elseif ($method === 'GET' && isset($segments[1]) && $segments[1] === 'ratings') {
        $stmt = $pdo->prepare("SELECT r.*, u.name as customer_name FROM ratings r LEFT JOIN users u ON r.customer_id = u.id WHERE r.restaurant_id = ?");
        $stmt->execute([$restId]);
        sendJson($stmt->fetchAll());
    }
}

sendJson(['error' => 'Endpoint not found'], 404);
?>