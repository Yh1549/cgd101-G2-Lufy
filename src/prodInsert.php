<?php

try {
	require_once("../../connect_lufy.php");
	        
	$sql2 ="INSERT INTO `product_order`(`order_no`, `member_no`, `order_datetime`, `payer_name`, `payer_phone`, `payer_address`, `credit_card`, `card_date`, `card_checkCode`, `recipient_name`, `recipient_phone`, `recipient_address`, `recipient_datetime`, `order_state`, `order_total`, `order_notes`) VALUES (null,:member_no,:order_datetime,:payer_name,:payer_phone,:payer_address,:credit_card,:credit_card_date,:card_checkCode,:recipient_name,:recipient_phone,:recipient_address,:recipient_datetime,:order_state,:order_total,:order_notes)";

	$productorder = $pdo->prepare($sql2);

	$productorder ->bindValue(":member_no",$_POST["memNo"]);
	$productorder ->bindValue(":order_datetime",$_POST["orderTime"]);
	$productorder -> bindValue(":payer_name", $_POST["payerName"]);
	$productorder -> bindValue(":payer_phone", $_POST["payerPhone"]);
	$productorder -> bindValue(":payer_address", $_POST["payerAddress"]);
	$productorder -> bindValue(":credit_card", $_POST["creditCard1"]);
	$productorder -> bindValue(":credit_card_date", $_POST["creditCard2"]);
	$productorder -> bindValue(":card_checkCode", $_POST["creditCard3"]);
	$productorder -> bindValue(":recipient_name", $_POST["receiverName"]);
	$productorder -> bindValue(":recipient_phone", $_POST["receiverPhone"]);
	$productorder -> bindValue(":recipient_address", $_POST["receiverAddress"]);
	$productorder -> bindValue(":recipient_datetime", $_POST["arriveDate"]);
	$productorder ->bindValue(":order_state",$_POST["orderState"]);
	$productorder ->bindValue(":order_total",$_POST["orderTotal"]);
	$productorder ->bindValue(":order_notes",$_POST["orderNote"]);
    $productorder -> execute();

	$sql3=" SELECT `order_no` FROM `product_order` ORDER BY `order_datetime` DESC LIMIT 1;";
	$productorder2 = $pdo->prepare($sql3);
	
	$productorder2 -> execute();
	$productRow = $productorder2->fetch(PDO::FETCH_ASSOC);
	// echo $productRow["order_no"]; 
	
	
	
	 $product = $_POST["productNo"];
	 $arr = explode(",",$product);
	 $product2= $_POST["productCounts"];
	 $arr2 = explode(",",$product2);
	 $product3= $_POST["productPrice"];
	 $arr3 = explode(",",$product3);

	 $result = count($arr);
   
	
	for($i=0;$i<=$result-1;$i++){

	$sql = "INSERT INTO `orderdetail`(`order_no`, `product_no`, `order_count`, `product_price`) VALUES (:order_no,:product_no,:order_count,:product_price)";
	$orderdetail = $pdo->prepare( $sql );
			
			
    $orderdetail -> bindValue(":order_no", $productRow["order_no"]);
	$orderdetail -> bindValue(":product_no", $arr[$i]);
	$orderdetail -> bindValue(":order_count", $arr2[$i]);
	$orderdetail -> bindValue(":product_price", $arr3[$i]);
	
			
	 $orderdetail -> execute();
	}

	 echo "success";

			
			


		

	
} catch (PDOException $e) {
	$errMsg = "";
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
	echo $errMsg;	
}


?>    
