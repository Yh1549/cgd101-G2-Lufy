<?php 
try{
	require_once("connect_lufy.php");

	$sql = "select * from product_order ORDER BY `order_datetime` DESC LIMIT 1"; //準備好sql指令
	$productOrder = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$orderRows = $productOrder->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($orderRows);
}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	//echo [$msg];
}
?>