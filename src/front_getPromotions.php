<?php 
try{
	require_once("connect_lufy.php");

	$sql = "SELECT * FROM promotions where promotions_state = 0 order by promotions_startDate desc LIMIT 3"; //準備好sql指令
	$promotions = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
	$promoRows = $promotions->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($promoRows);
}catch(PDOException $e){
	//$msg =  "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
	echo "錯誤訊息 : ", $e->getMessage(), "<br>";
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	//echo [$msg];
}
?>