<?php
session_start();
try{
require_once("connect_lufy.php");
 
if($_GET["add"] == "true"){
    if($_SESSION["memNo"]){
            $addfavoritesql = "insert into favorite(product_no, member_no) values(:product_no, :curId)";
            $addfavorite = $pdo->prepare($addfavoritesql);
            $addfavorite->bindValue(":product_no", $_GET["id"]);
            $addfavorite->bindValue(":curId", $_SESSION["memNo"]);
            $addfavorite->execute();
            echo 'add success';
    }else{echo 'Login First';}
}else if($_GET["add"] == "false"){
$removefavoritesql = "DELETE FROM `favorite` WHERE `favorite`.`product_no`=:product_no AND `favorite`.`member_no`=:curId";
$removefavorite = $pdo->prepare($removefavoritesql);
$removefavorite->bindValue(":product_no", $_GET["id"]);
$removefavorite->bindValue(":curId", $_SESSION["memNo"]);
$removefavorite->execute();
echo 'remove success';
}
} catch (PDOException $e) {
    // echo "error";
    echo $e->getMessage();
}
