USE `macaela`;

INSERT INTO order_status (order_status_id, Orders_order_id, Orders_Users_User_id, Orders_Place_delivery_place_delivery_id, Orders_pay_pay_id, Orders_Product_Product_id) VALUES 
(6, 6,6,'DEL-001',6,6),
(7, 7,7,'DEL-002',7,7),
(8, 8,8,'DEL-003',8,8),
(9, 9,9,'DEL-004',9,9),
(10, 10,10,'DEL-005',10,10);


INSERT INTO orders (order_id, order_status, amount, Users_User_id, Place_delivery_place_delivery_id, pay_pay_id, Product_Product_id) VALUES 
(6, 1, 150.99,6,'DEL-001',6,6),
(7, 0, 47,7,'DEL-002',7,7),
(8, 0, 356.77,8,'DEL-003',8,8),
(9, 1, 401,9,'DEL-004',9,9),
(10, 1, 352.30,10,'DEL-005',10,10);

INSERT INTO pay (pay_id,due_date,full_name,bank_number,cvv) VALUES 
(6, '2024-12-08', 'Ana Martinez', 02334234,456),
(7, '2028-11-04', 'Pedro Garcia', 007682324,345),
(8, '2025-05-11', 'Sofia Rodriguez', 37239378,123),
(9, '2029-09-05', 'Luisa López', 38492830,789),
(10, '2024-09-03', 'Jorge Silverhand', 03759347,678);

INSERT INTO users (User_id, customer_full_name, customer_password, customer_email, customer_age, is_administrator, customer_bankAccount, customer_description_page, customer_name_page, customer_banner) VALUES
(6, 'Ana Martinez', 'ana123', 'ana@example.com', '28', 1, 987654321, 'Ana es una entusiasta de la moda y la belleza.', 'anam', 'banner_anam.jpg'),
(7, 'Pedro García', 'pedro456', 'pedro@example.com', '35', 1, 123456789, 'Pedro disfruta explorando nuevos lugares y culturas.', 'pedrog', 'banner_pedrog.jpg'),
(8, 'Sofía Rodríguez', 'sofia789', 'sofia@example.com', '45', 1, 456789694, 'Sofía es la administradora del sitio web.', 'sofiar', 'banner_sofiar.jpg'),
(9, 'Luisa López', 'luisa101', 'luisa@example.com', '32', 1, 456789123, 'Luisa está interesada en la cocina y la gastronomía.', 'luisal', 'banner_luisal.jpg'),
(10, 'Jorge Silverhand', 'jorge2020', 'jorge@example.com', '40', 1, 654321987, 'Jorge es un aficionado del deporte y la actividad física.', 'jorger', 'banner_jorger.jpg');


INSERT INTO product (Product_id, Product_category, Product_color, Product_size, Product_stock, Productc_price, Product_description, Product_image, users_User_id) VALUES
(6, 'Electrónica', 'Gris', 'Pequeño', 15, 499.99, 'Auriculares inalámbricos', 'auriculares_gris.jpg', 6),
(7, 'Ropa', 'Negro', 'L', 20, 39.99, 'Camisa de algodón', 'camisa_negra.jpg', 7),
(8, 'Hogar', 'Marrón', 'Mediano', 10, 199.99, 'Sofá de cuero', 'sofa_marron.jpg', 8),
(9, 'Calzado', 'Blanco', '39', 25, 79.99, 'Zapatillas deportivas', 'zapatillas_blancas.jpg', 9),
(10, 'Accesorios', 'Rojo', 'Único', 30, 29.99, 'Bufanda de lana', 'bufanda_roja.jpg', 10);


INSERT INTO place_delivery (place_delivery_id, date_delivery, schedule_delivery, time_delivery, line_delivery, station_delivery) VALUES
('DEL-001', '2024-02-21', 'Mañana', '9:00 AM - 12:00 PM', 'Linea 1', 'Estación A'),
('DEL-002', '2024-02-22', 'Tarde', '2:00 PM - 5:00 PM', 'Linea 2', 'Estación B'),
('DEL-003', '2024-02-23', 'Noche', '7:00 PM - 10:00 PM', 'Linea 3', 'Estación C'),
('DEL-004', '2024-02-24', 'Mañana', '9:00 AM - 12:00 PM', 'Linea 4', 'Estación D'),
('DEL-005', '2024-02-25', 'Tarde', '2:00 PM - 5:00 PM', 'Linea 5', 'Estación E');


SELECT * FROM users;
