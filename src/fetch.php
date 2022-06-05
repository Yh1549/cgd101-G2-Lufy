<?php 
try{
	require_once("connect_lufy.php");

	$sql = "select * from product"; //準備好sql指令
	$product = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement

}catch(PDOException $e){
	//echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
}
?>    
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<style>
	.productTable th{
		background-color: pink;
	}
	.productTable td{
		border-bottom: 1px dotted deeppink;
	}
</style>
<title>Examples</title>
</head>
<body>

	<table align='center' class='productTable'>
	<tr><th>書號</th><th>書名</th><th>價格</th><th>作者</th></tr>
<?php 	
	while($prodRow = $product->fetch(PDO::FETCH_ASSOC)){//取回一筆資料放到關聯性陣列中,
?>
		<tr>
		<td><?=$prodRow["product_no"]?></td>
		<td><?=$prodRow["category_no"]?></td>
		<td><?=$prodRow["des_no"]?></td>
		<td><?=$prodRow["des_select"]?></td>
		</tr>
<?php
	} 
?>	
	</table>

<div>
	共幾筆 : <span style="color:blue;font-weight:bold"><?php echo $product->rowCount();?>筆 </span>
</div>

</body>
</html>