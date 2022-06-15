<?php
session_start();
try {
  require_once("connect_lufy.php");
  $sql = "select * from member where member_mail=:memId and member_psw=:memPsw ";//登入
  // $sql = "select * from member where member_mail=123 and member_psw=123 ";
  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $_POST["memId"]);
  $member->bindValue(":memPsw", $_POST["memPsw"]);
  $member->execute();
  if ($member->rowCount() != 0) {
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //登入成功,將登入者的資料寫入session
    $_SESSION["memNo"] = $memRow["member_no"];
    $_SESSION["memEmail"] = $memRow["member_mail"];
    $_SESSION["memName"] = $memRow["member_name"];
    $_SESSION["memPsw"] = $memRow["member_psw"];
    echo $_SESSION["memName"];
  } else {
    echo "輸入錯誤";
  }
} catch (PDOException $e) {
  // echo "error";
  echo $e->getMessage();
}
