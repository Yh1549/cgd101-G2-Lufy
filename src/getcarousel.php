<?php 
try{
	require_once("connect_lufy_cheryl.php");

	$sql = "select * from carousel"; //準備好sql指令
	$carousel = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$carouselRows = $carousel->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($carouselRows);
}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	//echo [$msg];
}
?>