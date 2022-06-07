<?php
try{
    require_once("connect_lufy.php");

    $sql = "select * from member where member_mail=:memId and member_psw=:memPsw ";
    // $sql = "select * from member where member_mail=:memId";
    // $sql = "select * from member";

    $member = $pdo->prepare($sql);
    $member->bindValue(":memId", $_POST["memId"]);
    $member->bindValue(":memPsw", $_POST["memPsw"]);
    $member->execute();
    if( $member->rowCount() != 0){
        echo "登入成功";
        $memRow = $member->fetch(PDO::FETCH_ASSOC);
        //登入成功,將登入者的資料寫入cookie
        -setcookie("memId", $memRow["member_mail"], time()+60);//60秒後失效
        -setcookie("memName", $memRow["member_name"], time()+60);
      }else{ //此帳號可使用
        echo "輸入錯誤";
      } 

}catch(PDOException $e){
    echo "error";
}

?>