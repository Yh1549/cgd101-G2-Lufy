<?php
session_start();
try {
  require_once("connect_cgd101g2.php");
  $sql = "select * from member where member_mail=:memId and member_psw=:memPsw ";//登入
  $member = $pdo->prepare($sql);
  $member->bindValue(":memId", $_POST["memId"]);
  $member->bindValue(":memPsw", $_POST["memPsw"]);
  $member->execute();
  if ($member->rowCount() != 0) {
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    if($member["member_state"] == 0){
      $_SESSION["memNo"] = $memRow["member_no"];
      $_SESSION["memEmail"] = $memRow["member_mail"];
      $_SESSION["memName"] = $memRow["member_name"];
      $_SESSION["memPsw"] = $memRow["member_psw"];
      echo $_SESSION["memName"];
    }else{
      echo "帳號凍結";
    }
  } else {
    echo "輸入錯誤";
  }
} catch (PDOException $e) {
  // echo "error";
  echo $e->getMessage();
}
