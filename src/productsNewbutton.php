<?php
try {
    require_once("connect_cgd101g2.php");
$total = [];
$designersql = "select * from designer";
$designer = $pdo->prepare($designersql);
$designer->execute();
$designerRow = $designer->fetchAll(PDO::FETCH_ASSOC);
$total["designer"] = $designerRow;
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
?>