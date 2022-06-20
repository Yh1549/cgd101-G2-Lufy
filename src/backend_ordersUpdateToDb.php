<?php 
try {
	require_once("connect_lufy.php");
    
	//執行sql指令
	$sql = "update product_order set member_no=:member_no, order_datetime=:order_datetime, payer_name=:payer_name, payer_phone=:payer_phone, 
    payer_address=:payer_address, 
    credit_card=:credit_card, 
    card_date=:card_date, 
    card_checkCode=:card_checkCode, 
    recipient_name=:recipient_name, 
    recipient_phone=:recipient_phone, 
    recipient_address=:recipient_address, 
    recipient_datetime=:recipient_datetime, 
    order_total=:order_total, 
    order_notes=:order_notes, 
    order_state=:order_state where order_no=:order_no";

    $managers = $pdo->prepare($sql); //編譯指令
    $managers->bindValue(":order_no", $_POST["order_no"]); //代入資料
    $managers->bindValue(":member_no", $_POST["member_no"]);
    $managers->bindValue(":order_datetime", $_POST["order_datetime"]);
    $managers->bindValue(":payer_name", $_POST["payer_name"]);
    $managers->bindValue(":payer_phone", $_POST["payer_phone"]);
    $managers->bindValue(":payer_address", $_POST["payer_address"]);
    $managers->bindValue(":credit_card", $_POST["credit_card"]);
    $managers->bindValue(":card_date", $_POST["card_date"]);
    $managers->bindValue(":card_checkCode", $_POST["card_checkCode"]);
    $managers->bindValue(":recipient_name", $_POST["recipient_name"]);
    $managers->bindValue(":recipient_phone", $_POST["recipient_phone"]);
    $managers->bindValue(":recipient_address", $_POST["recipient_address"]);
    $managers->bindValue(":recipient_datetime", $_POST["recipient_datetime"]);
    $managers->bindValue(":order_total", $_POST["order_total"]);
    $managers->bindValue(":order_notes", $_POST["order_notes"]);
    $managers->bindValue(":order_state", $_POST["order_state"]);
    $managers->execute();
	echo "異動成功~";
    //header("location:backend.html");

} catch (PDOException $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	// echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>