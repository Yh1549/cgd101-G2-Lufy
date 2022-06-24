<?php
session_start();
try {
    require_once("connect_cgd101g2.php");
    if ($_SESSION["memNo"]){
        echo $_SESSION["memNo"];
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}