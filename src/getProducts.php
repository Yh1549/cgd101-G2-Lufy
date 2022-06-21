<?php 
try{
	require_once("connect_lufy.php");
	// i.product_show, i.image_path, 
	$sql = "SELECT  DISTINCT p.product_no, p.des_no, p.name, p.description, p.specification, p.price, p.on_market, p.in_stock, d.des_name, d.des_text, 'd.des_img_path', r.promotions_no, r.promotions_price, m.promotions_no, m.promotions_name, m.promotions_startDate, m.promotions_endDate, m.promotions_text, c.category_no, c.category_imgpath, c.category_name
	FROM product p
	JOIN designer d ON p.des_no = d.des_no
	-- JOIN product_image i ON p.product_no = i.product_no
	LEFT JOIN promotionsdetail r ON p.product_no = r.product_no
	LEFT JOIN promotions as m ON m.promotions_no = r.promotions_no
	LEFT JOIN product_category c ON  p.category_no = c.category_no
				    order by 1 asc"; //準備好sql指令
	$products = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	// echo json_encode($prodRows);

	$imagesql = "select image_path, product_no, product_show from product_image";
	$image=$pdo->query($imagesql);
	$imageRows = $image->fetchAll(PDO::FETCH_ASSOC);
	// echo json_encode($imageRows);
	
	$result =['prodRows'=> $prodRows, 'imageRows'=> $imageRows];
	echo json_encode($result);

	
}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	//echo [$msg];
}
?>

