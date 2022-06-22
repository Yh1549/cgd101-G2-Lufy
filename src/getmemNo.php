<?php
session_start();
try {
    require_once("connect_lufy.php");
    if ($_SESSION["memNo"]){
        echo $_SESSION["memNo"];
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}