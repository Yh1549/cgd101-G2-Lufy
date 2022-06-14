<?php
    try{
	require_once("../../connect_lufy.php");
	$sql = "SELECT p.product_no, p.name, p.description, p.specification, p.price, i.image_path 
			FROM product p 
			JOIN product_image i ON p.product_no = i.product_no
			WHERE p.product_no=:id"; //準備好sql指令
	$products = $pdo->prepare($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$products->bindValue(':id', $_GET['id']);
    $products->execute();
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows,true);
	echo "異動成功~";

}catch(PDOException $e){
	echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>