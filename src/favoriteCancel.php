<?php
session_start();
try{
    require_once("connect_lufy.php");

    $favoritesql = "";
    $favoritecancel = $pdo->prepare($favoritesql);
    $favoritecancel->bindValue("",);
    $favoritecancel->execute();
    }
?>