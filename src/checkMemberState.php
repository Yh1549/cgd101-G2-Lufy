<?php
session_start();
try {
    require_once("connect_lufy.php");
    if (isset($_SESSION["memNo"]) == true){
        echo "已登入";
    } else {
        echo "未登入";
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}