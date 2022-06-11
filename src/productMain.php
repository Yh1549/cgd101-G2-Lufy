<?php 
try{
	require_once("connectLufyZin.php");

	$sql = "SELECT i.image_path, p.name, i.product_show FROM product p JOIN product_image i ON p.product_no = i.product_no WHERE i.product_show = 1"; //準備好sql指令
	$products = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);

	
	echo json_encode($prodRows,true);

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>