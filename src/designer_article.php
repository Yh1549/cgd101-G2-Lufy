
<?php
$errMsg = "";
try {
	require_once("../../connect_lufy.php");
	
			$sql = "UPDATE `designer` SET `art_1`=:art1,`art1_text`=:art1_text";
            
			$designer = $pdo->prepare( $sql );
			$designer -> bindValue(":art1", $_POST["art1"]);
			$designer -> bindValue(":art1_text", $_POST["art1_text"]);
			
			
			$designer -> execute();
			// echo "商品編號:", $pdo->lastInsertId();
            echo "sucess";
		

	// }else{
	// 	// echo "錯誤代碼 : {$_FILES["upFile"]["error"]} <br>";
	// 	echo "新增失敗<br>";
	// }
 catch (PDOException $e) {
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
}
// echo $errMsg;

?>    
