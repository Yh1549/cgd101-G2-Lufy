<?php
try{
    require_once("connect_lufy.php");

    // $memName = $_POST["memName"];
    // $email = $_POST["email"];
    // $memBD = $_POST["memBD"];
    // $memPhone = $_POST["memPhone"];
    // $Address = $_POST["Address"];


    $sql = "select * from member where member_mail=:email" ;
    
    $member = $pdo->prepare($sql);
    $member->bindValue(":email", $_POST["email"]);
    // $member->bindValue(":memPsw", $_POST["memPsw"]);
    $member->execute();
    if( $member->rowCount() != 0){
        echo "This email has already been registered";
        // $memRow = $member->fetch(PDO::FETCH_ASSOC);//接住資料庫成為陣列
        //登入成功,將登入者的資料寫入cookie
      }else{
        echo "This email okok";
      } 
}catch(PDOException $e){
    echo "error";
}
?>