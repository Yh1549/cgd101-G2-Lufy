-- 7
SET SQL_SAFE_UPDATES = 0;
START TRANSACTION;
UPDATE my_emp SET salary = salary * 1.1;
SAVEPOINT TX1;
DELETE FROM my_emp;
SELECT COUNT(*) FROM my_emp;
ROLLBACK TO TX1;
COMMIT;

SELECT * FROM lufy.product;
SELECT * FROM lufy.product_image;
SELECT * FROM lufy.product_category;
SELECT * FROM lufy.designer;

-- p.product_no, p.des_no, p.name, p.description, p.specification, p.price, d.des_name, d.des_text, d.des_publish, 'd.des_img_path', i.product_show, i.image_path, r.promotions_no, r.promotions_price, m.promotions_no, m.promotions_name, m.promotions_startDate, m.promotions_endDate, m.promotions_text, f.member_no
-- p.product_no, p.name, p.description, p.specification, p.price, d.des_name, d.des_text, 'd.des_img_path', i.image_path
-- 商品內頁所有資訊
SET SQL_SAFE_UPDATES = 0;
SELECT p.product_no, p.des_no, p.name, p.description, p.specification, p.price, d.des_name, d.des_text, d.des_publish, 'd.des_img_path', i.product_show, i.image_path, r.promotions_no, r.promotions_price, m.promotions_no, m.promotions_name, m.promotions_startDate, m.promotions_endDate, m.promotions_text, f.member_no
FROM product p
JOIN designer d ON p.des_no = d.des_no
JOIN product_image i ON p.product_no = i.product_no
JOIN promotionsdetail r ON p.product_no = r.product_no
JOIN promotions as m ON m.promotions_no = r.promotions_no
JOIN favorite f ON p.product_no = f.product_no
WHERE i.product_show = 0 AND p.on_market = 1;

-- 商品內頁(優惠活動) 
SELECT p.product_no, p.des_no, p.name, r.promotions_no, r.promotions_price
FROM product p
JOIN promotionsdetail r ON p.product_no = r.product_no;

-- 商品內頁(會員收藏)
SELECT p.product_no, p.des_no, p.name, f.member_no
FROM product p
JOIN favorite f ON p.product_no = f.product_no;

-- 商品內頁(商品設計師)
SELECT p.product_no, p.des_no, p.name, p.price, d.des_name, d.des_text, d.des_publish, 'd.des_img_path'
FROM product p
JOIN designer d ON p.des_no = d.des_no;

-- 商品內頁(商品圖片)
SELECT p.product_no, p.name, p.description, p.specification, p.price, i.image_path
FROM product p
JOIN product_image i ON p.product_no = i.product_no
WHERE p.product_no AND i.product_show = '0';

-- 商品類別
SELECT c.category_no, c.image_path
FROM product p
JOIN product_image i ON  p.product_no = i.product_no
JOIN product_category c ON p.category_no = c.category_no;