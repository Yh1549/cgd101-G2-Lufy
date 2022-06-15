<?php
session_start();
try{
require_once("connect_lufy.php");
// $favproduct = $_GET["product_no"];
// echo $favproduct; 

$addfavoritesql = "insert into favorite(product_no, member_no) values(:product_no, :curId)";
$addfavorite = $pdo->prepare($addfavoritesql);
$addfavorite->bindValue(":product_no", $_GET["id"]);
$addfavorite->bindValue(":curId", $_SESSION["memNo"]);
$addfavorite->execute();
echo 'add sucess';
} catch (PDOException $e) {
    // echo "error";
    echo $e->getMessage();
}
?>