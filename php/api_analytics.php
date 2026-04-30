<?php
// api_analytics.php - Handles Admin ANALYTICS
require 'core.php';

// GET /analytics/overview
if ($method === 'GET' && $segments[0] === 'overview') {
    $stmtOrders = $pdo->query("SELECT COUNT(id) as total_orders, SUM(amount) as total_revenue FROM orders WHERE status = 'DELIVERED'");
    $overview = $stmtOrders->fetch();
    
    $stmtUsers = $pdo->query("SELECT COUNT(id) as total_users FROM users WHERE role = 'customer'");
    $overview['total_customers'] = $stmtUsers->fetch()['total_users'];
    
    sendJson($overview);
}

// GET /analytics/revenue
elseif ($method === 'GET' && $segments[0] === 'revenue') {
    $stmt = $pdo->query("SELECT order_date, SUM(amount) as daily_revenue FROM orders WHERE status = 'DELIVERED' GROUP BY order_date ORDER BY created_at DESC LIMIT 7");
    sendJson($stmt->fetchAll());
}

// GET /analytics/top-customers
elseif ($method === 'GET' && $segments[0] === 'top-customers') {
    $stmt = $pdo->query("SELECT customer, COUNT(id) as order_count, SUM(amount) as total_spent FROM orders GROUP BY customer_id ORDER BY total_spent DESC LIMIT 5");
    sendJson($stmt->fetchAll());
}

// GET /analytics/top-restaurants
elseif ($method === 'GET' && $segments[0] === 'top-restaurants') {
    $stmt = $pdo->query("SELECT rest_name, COUNT(id) as order_count, SUM(amount) as total_revenue FROM orders GROUP BY rest_id ORDER BY total_revenue DESC LIMIT 5");
    sendJson($stmt->fetchAll());
}

// GET /analytics/delivery-times
elseif ($method === 'GET' && $segments[0] === 'delivery-times') {
    // Calculates averages based on the string column "time" (e.g. "30 min")
    $stmt = $pdo->query("SELECT name, time as est_time, orders FROM restaurants ORDER BY orders DESC LIMIT 10");
    sendJson($stmt->fetchAll());
}

// GET /analytics/peak-hours
elseif ($method === 'GET' && $segments[0] === 'peak-hours') {
    $stmt = $pdo->query("SELECT order_time, COUNT(id) as order_volume FROM orders GROUP BY order_time ORDER BY order_volume DESC LIMIT 5");
    sendJson($stmt->fetchAll());
}

sendJson(['error' => 'Endpoint not found'], 404);
?>