<?php
try{
require_once("connect_lufy.php");
    if ($_FILES["B_upFile"]["error"] == UPLOAD_ERR_OK) {
        if (file_exists("images") === false) {
            mkdir("images");
        }
        $fileInfoArr = pathinfo($_FILES["B_upFile"]["name"]);
        $fileName = uniqid() . ".{$fileInfoArr["extension"]}"; //usq321Bddd.gif 
        $from = $_FILES["B_upFile"]["tmp_name"];
        $to = "images/$fileName";

        if (copy($from, $to) === true) {
            $promotionsql = "INSERT INTO `promotions`(`promotions_name`, `promotions_startDate`, `promotions_endDate`, `promotions_state`, `promotionsImage_path`, `promotions_text`) VALUES (null,:promotions_name ,:promotions_startDate, :promotions_endDate, :promotions_state,  :promotionsImage_path, :promotions_text)";
            $promotion = $pdo->prepare($promotionsql);
            $promotion->bindValue(":promotions_name", $_POST["promotions_name"]);
            $promotion->bindValue(":promotions_startDate", $_POST["promotions_startDate"]);
            $promotion->bindValue(":promotions_endDate", $_POST["promotions_endDate"]);
            $promotion->bindValue(":promotions_state", $_POST["promotions_state"]);
            $promotion->bindValue(":promotionsImage_path", $to);
            $products->bindValue(":	promotions_text", $_POST["	promotions_text"]);
            $products->execute();

            echo "product新增成功";
        }
    } else {
        echo "錯誤代碼 : {$_FILES["B_upFile"]["error"]} <br>";
        echo "新增失敗<br>";
    }
}catch(PDOException $e){
    echo $e->getMessage();
}
