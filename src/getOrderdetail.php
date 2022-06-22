<?php 
try{
	require_once("connect_cgd101g2.php");

	$sql = "select 
	o.order_no, o.product_no, p.name as 'product_name', o.order_count, o.product_price
	from orderdetail o join product p on (o.product_no = p.product_no)"; //準備好sql指令
	$detail = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$detailRows = $detail->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($detailRows);
}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	//echo [$msg];
}
?>