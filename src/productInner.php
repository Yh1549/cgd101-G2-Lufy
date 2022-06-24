<?php
    try{
	require_once("connect_lufy.php");

	$sql = "SELECT p.product_no, p.des_no, p.name, p.description, p.specification, p.price, d.des_name, d.des_text, d.des_img_path, i.product_show, i.image_path, r.promotions_no, r.promotions_price, m.promotions_no, m.promotions_name, m.promotions_startDate, m.promotions_endDate, m.promotions_text, f.member_no, m.promotions_state
			FROM product p
			JOIN designer d ON p.des_no = d.des_no
			JOIN product_image i ON p.product_no = i.product_no
			LEFT JOIN promotionsdetail r ON p.product_no = r.product_no
			LEFT JOIN promotions as m ON m.promotions_no = r.promotions_no
			LEFT JOIN favorite f ON p.product_no = f.product_no
			WHERE i.product_show = 0 AND p.on_market = 0 AND p.product_no=:id"; //準備好sql指令
	$products = $pdo->prepare($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$products->bindValue(':id', $_GET['id']);
    $products->execute();
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows,true);

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>