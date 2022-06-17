<?php
try {
    require_once("connect_lufy.php");
$total = [];
$promotionssql = "select * from designer";
$promotions = $pdo->prepare($promotionssql);
$promotions->execute();
$promotionsRow = $promotions->fetchAll(PDO::FETCH_ASSOC);
$total["promotions"] = $promotionsRow;
$productCategorysql = "select * from product_category";
$productCategory = $pdo->prepare($productCategorysql);
$productCategory->execute();
$productCategoryRow = $productCategory->fetchAll(PDO::FETCH_ASSOC);
$total["productCategory"] = $productCategoryRow;
echo json_encode($total);//回傳的資料在這
} catch (PDOException $e) {
    $errMsg = "";
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine() . "<br>";
    echo $errMsg;
}
