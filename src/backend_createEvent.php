<?php
try {
    require_once("connect_lufy.php");
    $promotionsql = "insert into promotionsdetail(promotions_no, product_no, promotions_price) value(:promotions_no, :product_no, :promotions_price)";
        $promotion =$pdo->prepare($promotionsql);
        $promotion->bindValue(":promotions_no", $_POST["promotions_no"]);
        $promotion->bindValue(":product_no", $_POST["product_no"]);
        $promotion->bindValue(":promotions_price", $_POST["promotions_price"]);
        $promotion->execute();
        
    echo "promotions start";


} catch (PDOException $e) {
    $errMsg = "";
    $errMsg .= "錯誤原因 : " . $e->getMessage() . "<br>";
    $errMsg .= "錯誤行號 : " . $e->getLine() . "<br>";
    echo $errMsg;
}
?>