<?php
try{
    require_once("connect_lufy.php");

    // $sql = "select * from member where member_mail=:memId and member_psw=:memPsw "；;
    $sql = "select * from member where member_mail=:memId";
    // $sql = "select * from member";

    $member = $pdo->prepare($sql);
    $member->bindValue(":memId", $_POST["memId"]);
    // $member->bindValue(":memPsw", $_POST["memPsw"]);
    $member->execute();
    if( $member->rowCount() != 0){ //此帳號已存在, 不可用
        echo "登入成功";
      }else{ //此帳號可使用
        echo "輸入錯誤";
      } 

}catch(PDOException $e){
    echo "error";
}

?>