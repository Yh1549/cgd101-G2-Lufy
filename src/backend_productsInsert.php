<?php
try {
    require_once("connect_cgd101g2.php");

    $productssql = "INSERT INTO `product`(`category_no`, `des_no`, `des_select`, `name`, `description`, `specification`, `price`, `on_market`, `in_stock`) VALUES (:category_no, :des_no, :des_select, :product_name, :description, :specification, :price, :on_market, :in_stock)";
    $products = $pdo->prepare($productssql);
    $products->bindValue(":category_no", $_POST["category_no"]);
    $products->bindValue(":des_no", $_POST["des_no"]);
    $products->bindValue(":des_select", "1");
    $products->bindValue(":product_name", $_POST["product_name"]);
    $products->bindValue(":description", $_POST["description"]);
    $products->bindValue(":specification", $_POST["specification"]);
    $products->bindValue(":price", $_POST["price"]);
    $products->bindValue(":on_market", $_POST["on_market"]);
    $products->bindValue(":in_stock", $_POST["in_stock"]);
    $products->execute();
    $sql = "select product_no from product where name=:product_name";
    $productCur = $pdo->prepare($sql);
    $productCur->bindValue(":product_name", $_POST["product_name"]);
    $productCur->execute();
    $productCurRow = $productCur->fetch(PDO::FETCH_ASSOC);


    foreach ($_FILES["A_upFile"]["error"] as $i => $error) {
        switch ($_FILES["A_upFile"]["error"][$i]) {
            case UPLOAD_ERR_OK:
                $dir = "images";
                if (file_exists($dir) == false) {
                    mkdir($dir);
                }
                $from = $_FILES["A_upFile"]["tmp_name"][$i];
                $fileInfoArr = pathinfo($_FILES['A_upFile']['name'][$i]);
                $fileName = uniqid() . ".{$fileInfoArr["extension"]}";
                $to = "$dir/" . $fileName;
                copy($from, $to);
                
                $sql = "select product_no from product where name=:product_name";
                $productCur = $pdo->prepare($sql);
                $productCur->bindValue(":product_name", $_POST["product_name"]);
                $productCur->execute();
                $productCurRow = $productCur->fetch(PDO::FETCH_ASSOC);

                    $productImgsql = "INSERT INTO `product_image`(`product_no`, `name`, `product_show`, `image_path`) VALUES (:product_no ,:product_name, :product_show, :image_path)";
                    $productImg = $pdo->prepare($productImgsql);
                    $productImg->bindValue(":product_no", $productCurRow["product_no"]);
                    $productImg->bindValue(":product_name", $_POST["product_name"]);
                    $productImg->bindValue(":product_show", $_POST["product_show"][$i]);
                    $productImg->bindValue(":image_path", $fileName);
                    $productImg->execute();
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
       
    } ;
    
    if(isset($_POST["promotions_no"]) == true){
        $promotionsql = "insert into promotionsdetail(promotions_no, product_no, promotions_price) value(:promotions_no, :product_no, :promotions_price)";
        $promotion =$pdo->prepare($promotionsql);
        $promotion->bindValue(":promotions_no", $_POST["promotions_no"]);
        $promotion->bindValue(":product_no", $productCurRow["product_no"]);
        $promotion->bindValue(":promotions_price", $_POST["promotions_price"]);
        $promotion->execute();
        };
    echo "product新增成功";
    // if (copy($from, $to) === true) {
       
    // } else {
    //     echo "錯誤代碼 : {$_FILES["A_upFile"]["error"]} <br>";
    //     echo "新增失敗<br>";
    // }
} catch (PDOException $e) {
    $errMsg = "";
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine() . "<br>";
    echo $errMsg;
}
