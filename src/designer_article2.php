<?php
session_start();
$errMsg = "";
try {
	require_once("connect_cgd101g2.php");
	
			$sql = "UPDATE `designer` SET `art_2`=:art2,`art2_text`=:art2_text where manager_no = :cur_manager";
            
			$designer = $pdo->prepare( $sql );
			$designer -> bindValue(":art2", $_POST["art2"]);
			$designer -> bindValue(":art2_text", $_POST["art2_text"]);
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
