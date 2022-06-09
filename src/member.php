<?php
session_start();
try {
  require_once("connect_lufy.php");

  $sql = "select * from member where member_mail=:memId and member_psw=:memPsw ";
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

    $sqlorder = "select * from product_order where member_no=:curId";
    $memberorder = $pdo->prepare($sqlorder);
    $memberorder->bindValue(":curId", $memRow["member_no"]);
    // $memberorder->bindValue(":curId", "1");
    $memberorder->execute();
    $orderRow = $memberorder->fetch(PDO::FETCH_ASSOC);
    echo json_encode($orderRow);
  } else {
    echo "輸入錯誤";
  }
} catch (PDOException $e) {
  // echo "error";
  echo $e->getMessage();
}
