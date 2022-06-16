<?php 
try{
	require_once("connect_lufy.php");

	$sql = "SELECT c.category_no, c.image_path
			FROM product p
			JOIN product_image i ON  p.product_no = i.product_no
			JOIN product_category c ON p.category_no = c.category_no;"; //準備好sql指令
	$products = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);

	
	echo json_encode($prodRows,true);

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>