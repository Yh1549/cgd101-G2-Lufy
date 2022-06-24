<?php

try {
	require_once("connect_cgd101g2.php");
	//將檔案名稱寫回資料庫
	$sql = "INSERT INTO `manager`(`manager_no`, `manager_name`, `role`, `manager_account`, `manager_password`, `state`) VALUES (null,:manager_name,:role,:manager_account,:manager_password,:state)";
	$managers = $pdo->prepare( $sql );
	$managers -> bindValue(":manager_name", $_POST["manager_name"]);
	$managers -> bindValue(":role", $_POST["role"]);
	$managers -> bindValue(":manager_account", $_POST["manager_account"]);
	$managers -> bindValue(":manager_password", $_POST["manager_password"]);
	$managers -> bindValue(":state", $_POST["state"]);
	$managers -> execute();
	echo "新增成功";
} catch (PDOException $e) {
	$errMsg = "";
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
	echo $errMsg;	
}


?>    
