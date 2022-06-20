<?php 
try{

	require_once("connect_lufy.php");

	$sql2="SELECT count(*) as num  from orderdetail where order_no = (select max(order_no) from orderdetail);" ;
	$ordercounts = $pdo->query($sql2);
	$countsRows = $ordercounts->fetch(PDO::FETCH_ASSOC);
	

	
	

	$limit = $countsRows['num'];
    $sql = "select * from product_order p join orderdetail o on (p.order_no = o.order_no) ORDER BY order_datetime DESC LIMIT $limit";

	$productOrder = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	// $productOrder  -> bindValue(":memId",count($countsRows['num']) );
	$orderRows = $productOrder->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($orderRows);
}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	//echo [$msg];
}
?>