<?php
// api_users.php - Handles USERS endpoints
require 'core.php';

$input = getInput();

// GET /users
if ($method === 'GET' && empty($segments[0])) {
    $stmt = $pdo->query("SELECT id, name, email, role, phone, address, avatar, orders, spent, joined FROM users");
    sendJson($stmt->fetchAll());
}

// GET /users/{id}
elseif ($method === 'GET' && isset($segments[0])) {
    $stmt = $pdo->prepare("SELECT id, name, email, role, phone, address, avatar, orders, spent, joined FROM users WHERE id = ?");
    $stmt->execute([$segments[0]]);
    $user = $stmt->fetch();
    $user ? sendJson($user) : sendJson(['error' => 'User not found'], 404);
}

// PUT /users/{id}
elseif ($method === 'PUT' && isset($segments[0])) {
    $stmt = $pdo->prepare("UPDATE users SET name = ?, phone = ?, address = ? WHERE id = ?");
    $stmt->execute([$input['name'], $input['phone'], $input['address'], $segments[0]]);
    sendJson(['status' => 'success', 'message' => 'User updated']);
}

// DELETE /users/{id}
elseif ($method === 'DELETE' && isset($segments[0])) {
    $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
    $stmt->execute([$segments[0]]);
    sendJson(['status' => 'success', 'message' => 'User deleted']);
}

sendJson(['error' => 'Endpoint not found'], 404);
?>