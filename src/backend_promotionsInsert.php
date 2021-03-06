<?php

try {
	require_once("connect_cgd101g2.php");
	//.......確定是否上傳成功
	if( $_FILES["B_upFile"]["error"] == UPLOAD_ERR_OK){
		//----------------------
		//先檢查images資料夾存不存在
		if( file_exists("images") === false){
			mkdir("images");
		}
		//將檔案copy到要放的路徑
		$fileInfoArr = pathinfo($_FILES["B_upFile"]["name"]);
		$fileName = uniqid().".{$fileInfoArr["extension"]}"; //usq321Bddd.gif 

		$from = $_FILES["B_upFile"]["tmp_name"];
		$to = "images/$fileName";
		if(copy( $from, $to)===true){
			//將檔案名稱寫回資料庫
			$sql = "INSERT INTO `promotions`(`promotions_no`, `promotions_name`, `promotions_text`, `promotionsImage_path`, `promotions_startDate`, `promotions_endDate`, `promotions_state`) VALUES (null,:promotions_name,:promotions_text,:promotionsImage_path,:promotions_startDate,:promotions_endDate,:promotions_state)";
			$promotions = $pdo->prepare( $sql );
			$promotions -> bindValue(":promotions_name", $_POST["promotions_name"]);
			$promotions -> bindValue(":promotions_startDate", $_POST["promotions_startDate"]);
			$promotions -> bindValue(":promotions_endDate", $_POST["promotions_endDate"]);
			$promotions -> bindValue(":promotions_state", $_POST["promotions_state"]);
			$promotions -> bindValue(":promotions_text", $_POST["promotions_text"]);
			$promotions -> bindValue(":promotionsImage_path", $fileName);
			$promotions -> execute();
			echo "新增成功";
		}

	}else{
		echo "錯誤代碼 : {$_FILES["B_upFile"]["error"]} <br>";
		echo "新增失敗<br>";
	}
} catch (PDOException $e) {
	$errMsg = "";
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
	echo $errMsg;	
}


?>    
