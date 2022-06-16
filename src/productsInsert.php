<?php
try {
    require_once("connect_lufy.php");
    if ($_FILES["//檔案input//"]["error"] == UPLOAD_ERR_OK) {
        if (file_exists("images") === false) {
            mkdir("images");
        }
        $fileInfoArr = pathinfo($_FILES["//檔案input//"]["name"]);
        $fileName = uniqid() . ".{$fileInfoArr["extension"]}"; //usq321Bddd.gif 
        $from = $_FILES["//檔案input//"]["tmp_name"];
        $to = "images/$fileName";

        if (copy($from, $to) === true) {
            $productssql = "INSERT INTO `product`(`category_no`, `des_no`, `des_select`, `name`, `description`, `specification`, `price`, `on_market`, `in_stock`) VALUES (null,:category_no ,:des_no, :des_select, :name,  :description, :specification, :price, :on_market, :in_stock)";
            $products = $pdo->prepare($productssqlsql);
            $products->bindValue(":category_no", $_POST["category_no"]);
            $products->bindValue(":des_no", $_POST["des_no"]);
            $products->bindValue(":des_select", $_POST["des_select"]);
            $products->bindValue(":name", $_POST["name"]);
            $products->bindValue(":description", $_POST["description"]);
            $products->bindValue(":specification", $_POST["specification"]);
            $products->bindValue(":price", $_POST["price"]);
            $products->bindValue(":on_market", $_POST["on_market"]);
            $products->bindValue(":in_stock", $_POST["in_stock"]);
            
            $products->execute();

            $productImgsql= "INSERT INTO `product_image`(`product_no`, `name`, `product_show`, `image_path`) VALUES (null,:product_no ,:name, :product_show, :image_path)";
            $productImg = $pdo->prepare($productImgsql);
            $productImg->bindValue(":product_no",$_POST["product_no"]);
            $productImg->bindValue(":name", $_POST["name"]);
            $productImg->bindValue(":product_show", $_POST["product_show"]);
            $products->bindValue(":image_path", $fileName);

            $products->execute();

            echo "product新增成功";
        }
    } else {
        echo "錯誤代碼 : {$_FILES["C_upFile"]["error"]} <br>";
        echo "新增失敗<br>";
    }
} catch (PDOException $e) {
    $errMsg = "";
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine() . "<br>";
    echo $errMsg;
}

?>