<?php
session_start();
try {
  require_once("connect_lufy.php");
  $memberTotal = [];
  $sql = "select * from member where member_mail=:memId and member_psw=:memPsw ";
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

    $memberTotal["member"]= json_encode($memRow);
    // echo json_encode ($memRow);
// 訂單回傳
    $sqlorder = "select * from product_order where member_no=:curId";
    $memberorder = $pdo->prepare($sqlorder);
    $memberorder->bindValue(":curId", $memRow["member_no"]);
    // $memberorder->bindValue(":curId", "1");
    $memberorder->execute();
    $orderRow = $memberorder->fetchAll(PDO::FETCH_ASSOC);

    $memberTotal["memberorder"]= json_encode($orderRow);

    echo json_encode($memberTotal);
//私藏回傳
    // $sqlorder = "select * from product_order where member_no=:curId";
    // $memberorder = $pdo->prepare($sqlorder);
    // $memberorder->bindValue(":curId", $memRow["member_no"]);
    // // $memberorder->bindValue(":curId", "1");
    // $memberorder->execute();
    // $orderRow = $memberorder->fetchAll(PDO::FETCH_ASSOC);
    // echo json_encode($orderRow);

  } else {
    echo "輸入錯誤";
  }
} catch (PDOException $e) {
  // echo "error";
  echo $e->getMessage();
}
