<?php
session_start();
try{
    require_once("connect_cgd101g2.php");
    switch ($_FILES["memphoto"]["error"]) {
        case UPLOAD_ERR_OK:
            $dir = "images";
            if (file_exists($dir) == false) {
                mkdir($dir);
            }
            $from = $_FILES["memphoto"]["tmp_name"];
            $fileInfoArr = pathinfo($_FILES['memphoto']['name']);
            $fileName = uniqid() . ".{$fileInfoArr["extension"]}";
            $to = "$dir/" . $fileName;
            if(copy($from, $to)){
                $memberImgsql = "update member set member_pic=:member_pic where member_no=:member_no";
                $memberImg = $pdo->prepare($memberImgsql);
                $memberImg->bindValue(":member_pic", $fileName);
                $memberImg->bindValue(":member_no", $_SESSION["memNo"]);
                $memberImg->execute();            
                echo "update sucess";
            }else{
                echo "error";
            }
            break;
        case UPLOAD_ERR_INI_SIZE:
            echo "上傳檔案太大, 不得超過", ini_get("upload_max_filesize");
            break;
        case UPLOAD_ERR_FORM_SIZE:
            echo "上傳檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"];
            break;
        case UPLOAD_ERR_PARTIAL:
            echo "上傳檔案有問題~";
            break;
        case UPLOAD_ERR_NO_FILE:
            echo "Select new picture first";
            break;
        default:
    };
}catch(PDOException $e) {
    echo $e->getMessage();
  }
?>