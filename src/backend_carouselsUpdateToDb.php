<?php 
try {
	require_once("connect_lufy.php");
    switch ($_FILES["P_E_upFile"]["error"] ){
        case UPLOAD_ERR_OK: 
            $dir ="images";
            if(file_exists($dir) == false){ //檢測資料夾是否存在
                mkdir($dir); //創建資料夾 , make directory
            }
            $from = $_FILES['P_E_upFile']['tmp_name'];
            $fileInfoArr = pathinfo($_FILES['P_E_upFile']['name']);
            $fileName = uniqid().".{$fileInfoArr["extension"]}";
            $to = "$dir/" . $fileName; //"images/smile.gif"
            copy($from, $to);
            //echo "完成~";

            break;
        case UPLOAD_ERR_INI_SIZE:
            echo "上傳檔案太大, 不得超過", ini_get("upload_max_filesize"), "<br>";
            break;
        case UPLOAD_ERR_PARTIAL:
            echo "上傳檔案有問題~<br>";
            break;
        case UPLOAD_ERR_NO_FILE:
            $fileName = $_POST["carousels_img_origin"];
            break;
        default:
    }
	//執行sql指令
	$sql = "update carousel set carousel_name=:carousel_name, carousel_path=:carousel_path where carousel_no=:carousel_no";

    $news = $pdo->prepare($sql); //編譯指令
    $news->bindValue(":carousel_no", $_POST["carousel_no"]); //代入資料
    $news->bindValue(":carousel_name", $_POST["carousel_name"]);
    $news->bindValue(":carousel_path", $fileName);
    $news->execute();
	echo "異動成功~";
    //header("location:backend.html");

} catch (PDOException $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	// echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>