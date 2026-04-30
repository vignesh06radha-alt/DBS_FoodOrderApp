-- ═══════════════════════════════════════════════════════
--  FoodHub — MySQL Schema
--  Run this file once to create and seed the database.
--  Usage:  mysql -u root -p < schema.sql
-- ═══════════════════════════════════════════════════════

CREATE DATABASE IF NOT EXISTS foodhub CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE foodhub;

-- ─────────────────────────────────────────────
--  USERS
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
  id       INT AUTO_INCREMENT PRIMARY KEY,
  name     VARCHAR(100) NOT NULL,
  email    VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,          -- store hashed passwords in production
  role     ENUM('customer','seller','admin') NOT NULL DEFAULT 'customer',
  phone    VARCHAR(20),
  address  TEXT,
  avatar   CHAR(2)  DEFAULT 'U',
  orders   INT      DEFAULT 0,
  spent    DECIMAL(10,2) DEFAULT 0,
  joined   VARCHAR(20),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ─────────────────────────────────────────────
--  RESTAURANTS
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS restaurants (
  id       INT AUTO_INCREMENT PRIMARY KEY,
  name     VARCHAR(150) NOT NULL,
  cuisine  VARCHAR(100),
  emoji    VARCHAR(10)  DEFAULT '🍽️',
  bg       VARCHAR(20)  DEFAULT '#FFF5EE',
  rating   DECIMAL(3,1) DEFAULT 4.0,
  time     VARCHAR(20)  DEFAULT '30 min',
  active   TINYINT(1)   DEFAULT 1,
  rev      DECIMAL(12,2) DEFAULT 0,
  orders   INT          DEFAULT 0,
  owner    VARCHAR(100),
  created_at TIMESTAMP  DEFAULT CURRENT_TIMESTAMP
);

-- ─────────────────────────────────────────────
--  MENU ITEMS
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS menu_items (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  restaurant_id INT NOT NULL,
  name        VARCHAR(150) NOT NULL,
  category    VARCHAR(100),
  emoji       VARCHAR(10)  DEFAULT '🍽️',
  price       DECIMAL(10,2) NOT NULL,
  stock       INT           DEFAULT 0,
  description TEXT,
  available   TINYINT(1)   DEFAULT 1,
  created_at  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE
);

-- ─────────────────────────────────────────────
--  ORDERS
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS orders (
  id          VARCHAR(20)  PRIMARY KEY,          -- e.g. ORD-1001
  customer    VARCHAR(100),
  customer_id INT,
  rest_id     INT,
  rest_name   VARCHAR(150),
  items       TEXT,
  amount      DECIMAL(10,2),
  status      ENUM('PLACED','CONFIRMED','PREPARING','OUT_FOR_DELIVERY','DELIVERED','CANCELLED') DEFAULT 'PLACED',
  agent_id    INT,
  order_date  VARCHAR(30),
  order_time  VARCHAR(30),
  created_at  TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (rest_id) REFERENCES restaurants(id) ON DELETE SET NULL
);

-- ─────────────────────────────────────────────
--  ORDER ITEMS  (one row per item per order)
--  This is what makes real sales tracking possible.
--  Populated automatically by orders.php on POST.
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS order_items (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  order_id      VARCHAR(20) NOT NULL,
  menu_item_id  INT NOT NULL,
  name          VARCHAR(150),
  quantity      INT          DEFAULT 1,
  unit_price    DECIMAL(10,2),
  total_price   DECIMAL(10,2),
  created_at    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (order_id)     REFERENCES orders(id)     ON DELETE CASCADE,
  FOREIGN KEY (menu_item_id) REFERENCES menu_items(id) ON DELETE CASCADE
);

-- ─────────────────────────────────────────────
--  PROMOS
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS promos (
  code    VARCHAR(30) PRIMARY KEY,
  disc    DECIMAL(10,2),
  label   VARCHAR(200)
);

-- ─────────────────────────────────────────────
--  AGENTS
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS agents (
  id        INT AUTO_INCREMENT PRIMARY KEY,
  name      VARCHAR(100),
  phone     VARCHAR(20),
  available TINYINT(1) DEFAULT 1
);

-- ─────────────────────────────────────────────
--  NOTIFICATIONS
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS notifications (
  id      INT AUTO_INCREMENT PRIMARY KEY,
  role    ENUM('customer','seller','admin'),
  text    TEXT,
  time    VARCHAR(50),
  is_read TINYINT(1) DEFAULT 0,
  color   VARCHAR(50)
);

-- ─────────────────────────────────────────────
--  RATINGS
-- ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ratings (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  customer_id   INT,
  restaurant_id INT,
  order_id      VARCHAR(20),
  stars         INT,
  comment       TEXT,
  created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ═══════════════════════════════════════════════════════
--  SEED DATA
-- ═══════════════════════════════════════════════════════

INSERT INTO users (name, email, password, role, phone, address, avatar, orders, spent, joined) VALUES
('Rahul Mehta',  'rahul@email.com',   'password123', 'customer', '9876543210', '42, 3rd Cross Street, Anna Nagar, Chennai', 'R', 12, 8420,  'Jan 2024'),
('Priya Sharma', 'priya@email.com',   'password123', 'customer', '9876500001', 'Mumbai',  'P', 8,  5120,  'Feb 2024'),
('Ravi Kumar',   'ravi@seller.com',   'password123', 'seller',   '9876500002', 'Chennai', 'R', 0,  0,     'Dec 2023'),
('Amit Kumar',   'amit@email.com',    'password123', 'customer', '9876500003', 'Delhi',   'A', 19, 12800, 'Nov 2023'),
('Admin User',   'admin@food.com',    'password123', 'admin',    '9000000000', 'HQ',      'A', 0,  0,     'Oct 2023'),
('Priya Patel',  'priya2@seller.com', 'password123', 'seller',   '9876500005', 'Pune',    'P', 0,  0,     'Jan 2024'),
('Meena Iyer',   'meena@email.com',   'password123', 'customer', '9876500006', 'Bangalore','M',5,  3200,  'Mar 2024'),
('Karan Doshi',  'karan@email.com',   'password123', 'customer', '9876500007', 'Hyderabad','K',3,  1840,  'Apr 2024');

INSERT INTO restaurants (name, cuisine, emoji, bg, rating, time, active, rev, orders, owner) VALUES
('Spice Garden',  'North Indian', '🍛', '#FFF5EE', 4.5, '30 min', 1, 84200,  312, 'Ravi Kumar'),
('Pizza Republic','Italian',      '🍕', '#FFF0F5', 4.7, '35 min', 1, 97800,  418, 'Ravi Kumar'),
('Wok & Roll',    'Chinese',      '🥢', '#F0FFF4', 4.2, '25 min', 1, 62100,  241, 'Priya Patel'),
('Burger Barn',   'American',     '🍔', '#FFFDE7', 4.0, '20 min', 1, 45600,  198, 'Priya Patel'),
('Sushi Zen',     'Japanese',     '🍱', '#E8F5FE', 4.8, '40 min', 0, 73400,  287, 'Ravi Kumar'),
('Taco Fiesta',   'Mexican',      '🌮', '#F5F0FF', 4.3, '28 min', 1, 38900,  156, 'Priya Patel');

INSERT INTO menu_items (restaurant_id, name, category, emoji, price, stock, description) VALUES
(1,'Butter Chicken',  'Main Course','🍗',280,20,'Creamy tomato-based curry with tender chicken'),
(1,'Dal Makhani',     'Main Course','🫕',220,25,'Slow-cooked black lentils with butter and cream'),
(1,'Garlic Naan',     'Breads',     '🫓',60, 60,'Soft leavened bread with garlic butter'),
(1,'Paneer Tikka',    'Starters',   '🧀',240,15,'Grilled cottage cheese with spiced marinade'),
(1,'Mango Lassi',     'Drinks',     '🥭',80, 40,'Refreshing yogurt drink blended with mango'),
(1,'Chicken Biryani', 'Rice',       '🍚',320,18,'Fragrant basmati rice with spiced chicken'),
(2,'Margherita Pizza','Pizza',      '🍕',320,12,'Classic tomato, mozzarella and fresh basil'),
(2,'Pepperoni Pizza', 'Pizza',      '🍕',380,10,'Loaded with pepperoni slices and mozzarella'),
(2,'Pasta Arrabbiata','Pasta',      '🍝',280,20,'Penne pasta in spicy tomato sauce'),
(2,'Tiramisu',        'Desserts',   '🍰',150,8, 'Classic Italian dessert with espresso'),
(2,'Garlic Bread',    'Starters',   '🥖',120,30,'Toasted baguette with herb butter'),
(3,'Veg Fried Rice',  'Rice',       '🍚',180,25,'Wok-tossed rice with seasonal vegetables'),
(3,'Kung Pao Chicken','Main',       '🍜',260,18,'Spicy stir-fry with peanuts and dried chilies'),
(3,'Spring Rolls',    'Starters',   '🥢',120,40,'Crispy rolls stuffed with vegetables'),
(3,'Hot & Sour Soup', 'Soups',      '🍲',140,30,'Tangy and spicy soup with mushrooms'),
(3,'Hakka Noodles',   'Noodles',    '🍜',190,22,'Stir-fried noodles with vegetables'),
(4,'Classic Burger',  'Burgers',    '🍔',220,30,'Beef patty, lettuce, tomato and cheese'),
(4,'Chicken Burger',  'Burgers',    '🍔',200,25,'Crispy fried chicken with coleslaw'),
(4,'Cheese Fries',    'Sides',      '🍟',120,45,'Crispy fries topped with cheddar cheese'),
(4,'Chocolate Shake', 'Drinks',     '🥤',150,20,'Thick creamy chocolate milkshake'),
(5,'Salmon Nigiri',   'Nigiri',     '🍣',180,10,'Fresh Atlantic salmon over rice'),
(5,'Dragon Roll',     'Rolls',      '🍱',320,8, 'Shrimp tempura, avocado and eel'),
(6,'Beef Tacos',      'Tacos',      '🌮',180,30,'Corn tortillas with seasoned beef'),
(6,'Chicken Burrito', 'Burritos',   '🌯',220,25,'Flour tortilla with chicken and rice'),
(6,'Nachos',          'Starters',   '🧀',140,35,'Tortilla chips with cheese and jalapeños');

INSERT INTO orders (id, customer, customer_id, rest_id, rest_name, items, amount, status, agent_id, order_date, order_time) VALUES
('ORD-1001','Rahul Mehta',  1,1,'Spice Garden',  'Butter Chicken ×2, Naan ×2',     680,  'DELIVERED',       1,'Dec 18','2 hrs ago'),
('ORD-1002','Priya Sharma', 2,2,'Pizza Republic', 'Pepperoni Pizza ×1, Tiramisu ×2',680,  'OUT_FOR_DELIVERY',2,'Dec 18','45 min ago'),
('ORD-1003','Amit Kumar',   4,3,'Wok & Roll',     'Fried Rice ×2, Spring Rolls ×1', 480,  'PREPARING',       NULL,'Dec 18','20 min ago'),
('ORD-1004','Karan Doshi',  8,4,'Burger Barn',    'Classic Burger ×1, Fries ×2',    460,  'PLACED',          NULL,'Dec 18','5 min ago'),
('ORD-1005','Karan Doshi',  8,1,'Spice Garden',   'Dal Makhani ×2, Naan ×3',        620,  'CONFIRMED',       NULL,'Dec 18','15 min ago'),
('ORD-1006','Rahul Mehta',  1,2,'Pizza Republic',  'Margherita ×2',                 640,  'DELIVERED',       1,'Dec 17','6 hrs ago');

INSERT INTO promos (code, disc, label) VALUES
('WELCOME20', 20, '20% off for new users'),
('FLAT50',    50, 'Flat ₹50 off'),
('SAVE10',    10, '10% off on orders above ₹400');

INSERT INTO agents (name, phone, available) VALUES
('Raj Driver',   '8000000001', 1),
('Suresh Kumar', '8000000002', 1),
('Arun Vel',     '8000000003', 0);

INSERT INTO notifications (role, text, time, is_read, color) VALUES
('customer','Your order <strong>ORD-1002</strong> is out for delivery! ETA ~15 min.','12 min ago',0,'#f97316'),
('customer','<strong>Pizza Republic</strong> confirmed your last order.','46 min ago',0,'#22c55e'),
('customer','Your rating for <strong>Spice Garden</strong> was published.','2 hrs ago',1,'#f59e0b'),
('customer','New restaurant <strong>Taco Fiesta</strong> opened near you!','1 day ago',1,'#3b82f6'),
('seller','<strong>New order ORD-1004</strong> received — ₹460','5 min ago',0,'#f97316'),
('seller','<strong>Garlic Naan</strong> is running low on stock (8 left).','1 hr ago',0,'#f59e0b'),
('seller','You received a <strong>5-star review</strong> from Rahul M.','3 hrs ago',1,'#22c55e'),
('admin','<strong>Sushi Zen</strong> has been inactive for 3+ days.','2 hrs ago',0,'#f59e0b'),
('admin','Platform revenue crossed <strong>₹4 Lakhs</strong> this month!','4 hrs ago',0,'#22c55e'),
('admin','<strong>12 new users</strong> registered today.','6 hrs ago',1,'#3b82f6');
