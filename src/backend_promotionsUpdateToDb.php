<?php 
try {
	require_once("connect_cgd101g2.php");
    switch ($_FILES["B_E_upFile"]["error"] ){
        case UPLOAD_ERR_OK: 
            $dir ="images";
            if(file_exists($dir) == false){ //檢測資料夾是否存在
                mkdir($dir); //創建資料夾 , make directory
            }
            $from = $_FILES['B_E_upFile']['tmp_name'];
            $fileInfoArr = pathinfo($_FILES['B_E_upFile']['name']);
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
            $fileName = $_POST["promotions_img_origin"];
            break;
        default:
    }
	//執行sql指令
	$sql = "update promotions set promotions_name=:promotions_name, promotions_startDate=:promotions_startDate, promotions_endDate=:promotions_endDate, promotions_state=:promotions_state, promotionsImage_path=:promotionsImage_path, promotions_text=:promotions_text where promotions_no=:promotions_no";

    $promotions = $pdo->prepare($sql); //編譯指令
    $promotions->bindValue(":promotions_no", $_POST["promotions_no"]); //代入資料
    $promotions->bindValue(":promotions_name", $_POST["promotions_name"]);
    $promotions->bindValue(":promotions_startDate", $_POST["promotions_startDate"]);
    $promotions->bindValue(":promotions_endDate", $_POST["promotions_endDate"]);
    $promotions->bindValue(":promotions_state", $_POST["promotions_state"]);
    $promotions->bindValue(":promotionsImage_path", $fileName);
    $promotions->bindValue(":promotions_text", $_POST["promotions_text"]);
    $promotions->execute();
	echo "異動成功~";
    //header("location:backend.html");

} catch (PDOException $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	// echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>