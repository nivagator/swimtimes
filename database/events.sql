INSERT INTO events (course, distance, stroke)
VALUES ('LCM',100,'Fly'),
('LCM',50,'Back'),
('LCM',100,'Back'),
('LCM',200,'Back'),
('LCM',50,'Breast'),
('LCM',100,'Breast'),
('LCM',200,'Breast'),
('LCM',50,'Fly'),
('LCM',50,'Free'),
('LCM',100,'Free'),
('LCM',200,'Free'),
('LCM',400,'Free'),
('LCM',800,'Free'),
('LCM',1500,'Free'),
('LCM',200,'IM'),
('SCY',100,'Fly'),
('SCY',50,'Back'),
('SCY',100,'Back'),
('SCY',50,'Breast'),
('SCY',100,'Breast'),
('SCY',200,'Breast'),
('SCY',50,'Fly'),
('SCY',50,'Free'),
('SCY',100,'Free'),
('SCY',200,'Free'),
('SCY',500,'Free'),
('SCY',100,'IM'),
('SCY',200,'IM'),
('SCY',400,'IM')

SELECT * FROM events e 
WHERE stroke = 'Breast'
ORDER BY distance 