<?php
session_start();
try{
    require_once("connect_lufy.php");
if($_POST["oldPsw"]){
    if($_POST["oldPsw"] == $_SESSION["memPsw"] && $_POST["newPsw"] == $_POST["checkPsw"]){
        $pswChangesql = "update member set member_psw=:newPsw where member_no=:curId";
        $pswChange = $pdo->prepare($pswChangesql);
        $pswChange ->bindValue(":curId", $_SESSION["memNo"]);
        $pswChange ->bindValue(":newPsw", $_POST["newPsw"]);
        $pswChange ->execute();
        $_SESSION["memPsw"]=$_POST["newPsw"];
        echo "Change Sucess";
    }else{
        echo "Wrong Password";
    };
}else{
$memModifysql = "update member set member_name=:newName,  member_mail=:newMail, member_birthday=:newBD, member_tel=:newTel,  member_address=:newAddress WHERE member_no=:curId";

    $memModify = $pdo->prepare($memModifysql);
    $memModify ->bindValue(":curId", $_SESSION["memNo"]);
    $memModify ->bindValue(":newName", $_POST["memName"]);
    $memModify ->bindValue(":newMail", $_POST["email"]);
    $memModify ->bindValue(":newBD", $_POST["memBD"]);
    $memModify ->bindValue(":newTel", $_POST["memPhone"]);
    $memModify ->bindValue(":newAddress", $_POST["Address"]);
    $memModify ->execute();

    echo 'Change Sucess';

}
}catch(PDOException $e) {
    // echo "error";
    echo $e->getMessage();
  }
?>