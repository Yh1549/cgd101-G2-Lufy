<?php 
try{

	require_once("connect_cgd101g2.php");

	$sql = "select * from product_order ORDER BY `order_datetime` DESC LIMIT 1"; //準備好sql指令
	$sql2="SELECT count(*) as num  from orderdetail where order_no = (select max(order_no) from orderdetail);" ;
	$ordercounts = $pdo->query($sql2);
	$countsRows = $ordercounts->fetch(PDO::FETCH_ASSOC);
	

	
	

	$limit = $countsRows['num'];
    $sql = "select * from 
	product_order po join orderdetail o on (po.order_no = o.order_no)
	join product p on(o.product_no = p.product_no)
	join product_image pm on (p.product_no = pm.product_no) 
	
	ORDER BY order_datetime DESC LIMIT $limit;";

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