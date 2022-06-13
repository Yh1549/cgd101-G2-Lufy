<?php

try {
	require_once("connect_lufy.lee.php");
	        
	$sql2 ="INSERT INTO `product_order`(`order_no`, `member_no`, `order_datetime`, `order_state`, `order_total`, `order_notes`) VALUES (null,:member_no,:order_datetime,:order_state,:order_total,:order_notes)";

	$productorder = $pdo->prepare($sql2);

	$productorder ->bindValue(":member_no",$_POST["memNo"]);
	$productorder ->bindValue(":order_datetime",$_POST["orderTime"]);
	$productorder ->bindValue(":order_state",$_POST["orderState"]);
	$productorder ->bindValue(":order_total",$_POST["orderTotal"]);
	$productorder ->bindValue("order_notes",$_POST["orderNote"]);


	$productorder -> execute();
	$productRow = $productorder->fetch(PDO::FETCH_ASSOC);
	
			$sql = "INSERT INTO `orderdetail`(`order_no`, `product_no`, `order_count`, `product_price`, `payer_name`, `payer_phone`, `payer_address`, `credit_card`,`credit_card_date`, `card_checkCode`, `recipient_name`, `recipient_phone`, `recipient_address`, `recipient_datetime`) VALUES (:order_no,:product_no,:order_count,:product_price,:payer_name,:payer_phone,:payer_address,:credit_card,:credit_card_date,:card_checkCode,:recipient_name,:recipient_phone,:recipient_address,:recipient_datetime)";
			$orderdetail = $pdo->prepare( $sql );
			
			
            $orderdetail -> bindValue(":order_no", $productRow["order_no"]);
			$orderdetail -> bindValue(":product_no", $_POST["productNo"]);
			$orderdetail -> bindValue(":order_count", $_POST["productCounts"]);
			$orderdetail -> bindValue(":product_price", $_POST["productPrice"]);
			$orderdetail -> bindValue(":payer_name", $_POST["payerName"]);
			$orderdetail -> bindValue(":payer_phone", $_POST["payerPhone"]);
			$orderdetail -> bindValue(":payer_address", $_POST["payerAddress"]);
			$orderdetail -> bindValue(":credit_card", $_POST["creditCard1"]);
			$orderdetail -> bindValue(":credit_card_date", $_POST["creditCard2"]);
			$orderdetail -> bindValue(":card_checkCode", $_POST["creditCard3"]);
			$orderdetail -> bindValue(":recipient_name", $_POST["receiverName"]);
			$orderdetail -> bindValue(":recipient_phone", $_POST["receiverPhone"]);
			$orderdetail -> bindValue(":recipient_address", $_POST["receiverAddress"]);
			$orderdetail -> bindValue(":recipient_datetime", $_POST["arriveDate"]);
			
			$orderdetail -> execute();
			echo "商品編號:", $pdo->lastInsertId();

			
			


		

	
} catch (PDOException $e) {
	$errMsg = "";
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
	echo $errMsg;	
}


?>    
