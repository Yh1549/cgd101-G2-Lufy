 <?php

// try {
// 	require_once("connect_lufy.php");
// 	//將檔案名稱寫回資料庫
// 	$sql = "INSERT INTO `promotionsdetail`(`promotions_no`, `product_no`, `promotions_price`) VALUES (:promotions_no,:product_no,:promotions_price)";
// 	$details = $pdo->prepare( $sql );
// 	$details -> bindValue(":promotions_no", $_POST["promotions_no"]);
// 	$details -> bindValue(":product_no", $_POST["product_no"]);
// 	$details -> bindValue(":promotions_price", $_POST["promotions_price"]);
// 	$details -> execute();
// 	echo "新增成功";
		
// } catch (PDOException $e) {
// 	$errMsg = "";
// 	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
// 	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
// 	echo $errMsg;	
// }


?>     
