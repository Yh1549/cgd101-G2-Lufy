<?php
session_start();
try{
require_once("connect_lufy.php");
// $favproduct = $_GET["product_no"];
// echo $favproduct; 
if($_GET["add"]){
$addfavoritesql = "insert into favorite(product_no, member_no) values(:product_no, :curId)";
$addfavorite = $pdo->prepare($addfavoritesql);
$addfavorite->bindValue(":product_no", $_GET["product_no"]);
$addfavorite->bindValue(":curId", $_SESSION["memNo"]);
$addfavorite->execute();
echo 'add sucess';
}else{

$removefavoritesql = "DELETE FROM `favorite` WHERE `favorite`.`product_no`=:product_no AND `favorite`.`member_no`=:curId";
$addfavorite = $pdo->prepare($addfavoritesql);
$addfavorite->bindValue(":product_no", $_GET["product_no"]);
$addfavorite->bindValue(":curId", $_SESSION["memNo"]);
$addfavorite->execute();
echo 'remove sucess';
}
} catch (PDOException $e) {
    // echo "error";
    echo $e->getMessage();
}
