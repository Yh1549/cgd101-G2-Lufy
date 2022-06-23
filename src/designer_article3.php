
<?php
session_start();
$errMsg = "";
try {
	require_once("connect_lufy.php");
	
			$sql = "UPDATE `designer` SET `art_3`=:art3,`art3_text`=:art3_text where manager_no = :cur_manager";
            
			$designer = $pdo->prepare( $sql );
			$designer -> bindValue(":art3", $_POST["art3"]);
			$designer -> bindValue(":art3_text", $_POST["art3_text"]);
			$designer -> bindValue(":cur_manager", $_SESSION["manager_no"]);
			
			
			$designer -> execute();
			// echo "商品編號:", $pdo->lastInsertId();
            echo "sucess";
		

	// else{
	// 	// echo "錯誤代碼 : {$_FILES["upFile"]["error"]} <br>";
	// 	echo "新增失敗<br>";
	// }
}
 catch (PDOException $e) {
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}


// echo $errMsg;

?>    
