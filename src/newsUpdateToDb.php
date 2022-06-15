<?php 
try {
	require_once("../../connect_lufy.php");
    /*if($_FILES["E_upFile"]["error"] == UPLOAD_ERR_OK){

        // $fileName....
        // copy($from, $to)

        $dir ="images";
		if(file_exists($dir) == false){ //檢測資料夾是否存在
			mkdir($dir); //創建資料夾 , make directory
		}
		$from = $_FILES['E_upFile']['tmp_name'];
		$to = "$dir/" . $_FILES['E_upFile']['name']; //"images/smile.gif"
		copy($from, $to);
		echo "完成~";

    }else if($_FILES["E_upFile"]["error"] == UPLOAD_ERR_NO_FILE){
        $fileName = $_POST["img_origin"];
    }*/
    switch ($_FILES["E_upFile"]["error"] ){
        case UPLOAD_ERR_OK: 
            $dir ="images";
            if(file_exists($dir) == false){ //檢測資料夾是否存在
                mkdir($dir); //創建資料夾 , make directory
            }
            $from = $_FILES['E_upFile']['tmp_name'];
            $to = "$dir/" . $_FILES['E_upFile']['name']; //"images/smile.gif"
            copy($from, $to);
            echo "完成~";
            // $fn = $_FILES['E_upFile']['name'];
            $fileName = $_FILES['E_upFile']['name'];
            break;
        case UPLOAD_ERR_INI_SIZE:
            echo "上傳檔案太大, 不得超過", ini_get("upload_max_filesize"), "<br>";
            break;
        case UPLOAD_ERR_PARTIAL:
            echo "上傳檔案有問題~<br>";
            break;
        case UPLOAD_ERR_NO_FILE:
            $fileName = $_POST["img_origin"];
            break;
        default:
    }
	//執行sql指令
	$sql = "update news set news_title=:news_title, news_text=: news_text, news_publish=:news_publish, news_state=:news_state, newsImage_path=:newsImage_path where news_no=:news_no";

    $news = $pdo->prepare($sql); //編譯指令
    $news->bindValue(":news_no", $_POST["news_no"]); //代入資料
    $news->bindValue(":news_title", $_POST["news_title"]);
    $news->bindValue(":news_text", $_POST["news_text"]);
    $news->bindValue(":news_publish", $_POST["news_publish"]);
    $news->bindValue(":news_state", $_POST["news_state"]);
    $news->bindValue(":newsImage_path", $fileName);
    $news->execute();
	echo "異動成功~";
    //header("location:backend.html");

} catch (PDOException $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	// echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>