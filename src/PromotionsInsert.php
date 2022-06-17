<?php
try{
require_once("connect_lufy.php");

$promotionsql = "";
$promotion = $pdo->prepare($promotionsql);
$promotion->bindValue("","");
$promotion->execute();

// promotions_name
// promotions_startDate
// promotions_endDate
// promotions_state
// promotionsImage_path
// promotions_text

// detail
// promotions_no 
// product_no
// promotions_price

}catch(PDOException $e){
    echo $e->getMessage();
}

?>