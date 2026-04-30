<?php
// api_auth.php - Handles AUTH endpoints
require 'core.php';

$input = getInput();

// POST /auth/login
if ($method === 'POST' && $segments[0] === 'login') {
    if (!isset($input['email']) || !isset($input['password'])) {
        sendJson(['error' => 'Email and password required'], 400);
    }
    
    // In production, use password_verify() with hashed passwords. 
    // Using direct match here to align with your seed data ('password123').
    $stmt = $pdo->prepare("SELECT id, name, email, role, phone, address, avatar FROM users WHERE email = ? AND password = ?");
    $stmt->execute([$input['email'], $input['password']]);
    $user = $stmt->fetch();

    if ($user) {
        sendJson(['status' => 'success', 'user' => $user]);
    } else {
        sendJson(['status' => 'error', 'message' => 'Invalid credentials'], 401);
    }
}

// POST /auth/register
elseif ($method === 'POST' && $segments[0] === 'register') {
    $name = $input['name'];
    $email = $input['email'];
    $password = $input['password']; // Remember to hash in prod
    $role = $input['role'] ?? 'customer';
    $avatar = strtoupper(substr($name, 0, 1)); // First letter as avatar

    try {
        $stmt = $pdo->prepare("INSERT INTO users (name, email, password, role, avatar, joined) VALUES (?, ?, ?, ?, ?, DATE_FORMAT(NOW(), '%b %Y'))");
        $stmt->execute([$name, $email, $password, $role, $avatar]);
        sendJson(['status' => 'success', 'user_id' => $pdo->lastInsertId()]);
    } catch (PDOException $e) {
        sendJson(['status' => 'error', 'message' => 'Email already exists or invalid data'], 400);
    }
}

// POST /auth/logout
elseif ($method === 'POST' && $segments[0] === 'logout') {
    // Usually handled client-side by deleting token, but providing endpoint for completeness
    sendJson(['status' => 'success', 'message' => 'Logged out successfully']);
}

sendJson(['error' => 'Endpoint not found'], 404);
?>