<?php 
try{
	require_once("connect_lufy.php");

	$sql = "select 
	p.product_no, p.category_no, c.name as 'category_name', p.des_no, d.des_name, p.des_select, p.name, p.description, p.specification, p.price, p.on_market, p.in_stock 
	from product p join designer d on (p.des_no = d.des_no)
				join product_category c on (p.category_no = c.category_no) order by 1 asc"; //準備好sql指令
	$products = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows);
}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	//echo [$msg];
}
?>