<?php
try {
    require_once("connect_lufy.php");
    //--------left data
    $productssql = "update product set category_no=:category_no, des_no=:des_no, name=:name, description=:description, specification=:specification, price=:price, on_market=:on_market, in_stock=:in_stock where product_no=:product_no";
    $products = $pdo->prepare($productssql);
    $products->bindValue(":product_no", $_POST["product_no"]);
    $products->bindValue(":category_no", $_POST["category_no"]);
    $products->bindValue(":des_no", $_POST["des_no"]);
    //$products->bindValue(":des_select", $_POST["des_select"]);
    $products->bindValue(":name", $_POST["product_name"]);
    $products->bindValue(":description", $_POST["description"]);
    $products->bindValue(":specification", $_POST["specification"]);
    $products->bindValue(":price", $_POST["price"]);
    $products->bindValue(":on_market", $_POST["on_market"]);
    $products->bindValue(":in_stock", $_POST["in_stock"]);
    $products->execute();

    if(isset($_POST["promotions_no"]) == true){
    $promotionsql = "update promotionsdetail set promotions_no=:promotions_no, promotions_price=:promotions_price where product_no=:product_no";
    $promotion =$pdo->prepare($promotionsql);
    $promotion->bindValue(":promotions_no", $_POST["promotions_no"]);
    $promotion->bindValue(":product_no", $_POST["product_no"]);
    $promotion->bindValue(":promotions_price", $_POST["promotions_price"]);
    $promotion->execute();
    // echo "update left oK";
    }
    
    //------right data
  
    foreach ($_FILES["A_E_upFile"]["error"] as $i => $error) {
        switch ($_FILES["A_E_upFile"]["error"][$i]) {
            case UPLOAD_ERR_OK:
                $dir = "images";
                if (file_exists($dir) == false) {
                    mkdir($dir);
                }
                $from = $_FILES["A_E_upFile"]["tmp_name"][$i];
                $fileInfoArr = pathinfo($_FILES['A_E_upFile']['name'][$i]);
                $fileName = uniqid() . ".{$fileInfoArr["extension"]}";
                $to = "$dir/" . $fileName;
                if(copy($from, $to)){
                    $productImgsql = "update product_image set name=:name, product_show=:product_show, image_path=:image_path where image_no=:image_no";
                    $productImg = $pdo->prepare($productImgsql);
                    $productImg->bindValue(":image_no", $_POST["image_no"][$i]);
                    $productImg->bindValue(":name", $_POST["product_name"]);
                    $productImg->bindValue(":product_show", $_POST["product_show"][$i]);
                    $productImg->bindValue(":image_path", $fileName);
                    $productImg->execute();            
                    echo "update right OK";
                }else{
                    echo "error";
                }

                break;
            case UPLOAD_ERR_INI_SIZE:
                echo "上傳檔案太大, 不得超過", ini_get("upload_max_filesize"), "<br>";
                break;
            case UPLOAD_ERR_FORM_SIZE:
                echo "上傳檔案太大, 不得超過", $_POST["MAX_FILE_SIZE"], "<br>";
                break;
            case UPLOAD_ERR_PARTIAL:
                echo "上傳檔案有問題~<br>";
                break;
            case UPLOAD_ERR_NO_FILE:
                echo "檔案没選~<br>";
                break;
            default:
        };

    }
    
} catch (PDOException $e) {
    $errMsg = "";
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine() . "<br>";
    echo $errMsg;
}
