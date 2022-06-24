<?php
try {
    require_once("connect_lufy.php");
    $productssql = "DELETE from promotionsdetail where product_no=:product_no";
    $products = $pdo->prepare($productssql);
    $products->bindValue(":product_no", $_POST["product_no"]);
    $products->execute();
    echo "promotions end";

} catch (PDOException $e) {
    $errMsg = "";
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine() . "<br>";
    echo $errMsg;
}
?>