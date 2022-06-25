<?php

try {
	require_once("connect_cgd101g2.php");
	//.......確定是否上傳成功
	if( $_FILES["C_upFile"]["error"] == UPLOAD_ERR_OK){
		//----------------------
		//先檢查images資料夾存不存在
		if( file_exists("images") === false){
			mkdir("images");
		}
		//將檔案copy到要放的路徑
		$fileInfoArr = pathinfo($_FILES["C_upFile"]["name"]);
		$fileName = uniqid().".{$fileInfoArr["extension"]}"; //usq321Bddd.gif 

		$from = $_FILES["C_upFile"]["tmp_name"];
		$to = "images/$fileName";
		if(copy( $from, $to)===true){
			//將檔案名稱寫回資料庫
			$sql = "INSERT INTO `news`(`news_no`, `news_title`, `news_text`, `newsImage_path`, `news_publish`, `news_state`) VALUES (null,:news_title,:news_text,:newsImage_path,:news_publish,:news_state)";
			$news = $pdo->prepare( $sql );
			$news -> bindValue(":news_title", $_POST["news_title"]);
			$news -> bindValue(":news_text", $_POST["news_text"]);
			$news -> bindValue(":news_publish", $_POST["news_publish"]);
			$news -> bindValue(":news_state", $_POST["news_state"]);
			$news -> bindValue(":newsImage_path", $fileName);
			$news -> execute();
			echo "新增成功";
		}

	}else{
		echo "錯誤代碼 : {$_FILES["C_upFile"]["error"]} <br>";
		echo "新增失敗<br>";
	}
} catch (PDOException $e) {
	$errMsg = "";
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";
	echo $errMsg;	
}


?>    
