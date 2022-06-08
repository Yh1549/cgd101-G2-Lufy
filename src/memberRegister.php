<?php
try{
    require_once("connect_lufy.php");

    $sql = "select * from member where member_mail=:memId and member_psw=:memPsw" ;
    
    $member = $pdo->prepare($sql);
    $member->bindValue(":memId", $_POST["memId"]);
    $member->bindValue(":memPsw", $_POST["memPsw"]);
    $member->execute();
    if( $member->rowCount() != 0){
        echo "登入成功";
        $memRow = $member->fetch(PDO::FETCH_ASSOC);//接住資料庫成為陣列
        //登入成功,將登入者的資料寫入cookie
     
      }else{
        echo "輸入錯誤";
      } 
}catch(PDOException $e){
    echo "error";
}
?>