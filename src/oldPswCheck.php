<?php
session_start();
try{
    require_once("connect_cgd101g2.php");
        $pswChecksql = "select member_psw from member where member_no=:curId";
        $pswCheck = $pdo->prepare($pswChecksql);
        $pswCheck ->bindValue(":curId", $_SESSION["memNo"]);
        $pswCheck ->execute();
        $pswCheckRow = $pswCheck->fetch(PDO::FETCH_ASSOC);
    if($_POST["pswC"] == $pswCheckRow["member_psw"]){
        echo "ok";
    }else{
        echo "no";
    }
}catch(PDOException $e) {
    // echo "error";
    echo $e->getMessage();
  }
?>