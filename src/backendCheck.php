<?php
session_start();
try {
    require_once("connect_cgd101g2.php");
    if (isset($_SESSION["state"]) == true) {
        if ($_SESSION["state"] == 0) {
            if (isset($_SESSION["role"])) {
                if ($_SESSION["role"] == "後台管理人員") {
                    echo "admin";
                } else if ($_SESSION["role"] == "設計師") {
                    echo "fail";
                }
            } else {
                echo "fail";
            }
        } else {
            echo "fail";
        }
    } else {
        echo "fail";
    }
} catch (PDOException $e) {
    echo $e->getMessage();
}
