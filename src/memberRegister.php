<?php
session_start();
$json = $_POST["json"];
$data = json_decode($json, true);
$jsonCount = count($data);

if (array_key_first($data) == 'email' && $jsonCount == 1) {
  try {
    // Name跟email檢查有無重複
    require_once("connect_cgd101g2.php");
    $sql = "select * from member where member_mail=:email";
    $member = $pdo->prepare($sql);
    $member->bindValue(":email", $data["email"]);
    $member->execute();
    if ($member->rowCount() != 0) {
      echo "This email has already been registered";
    } else {
      echo "This email okok";
    }
  } catch (PDOException $e) {
    echo "error";
  }
} else if ($jsonCount > 1) {
  try {
    require_once("connect_cgd101g2.php");
    $sql = "insert into member(member_name, member_mail, member_psw, member_birthday, member_tel, member_address, member_state, member_pic) values(:memName, :email, :memPsw, :memBD, :memPhone, :Address, 0, 'memphoto_default.jpg')";
    $member = $pdo->prepare($sql);
    $member->bindValue(":memName", $data["memName"]);
    $member->bindValue(":email", $data["email"]);
    $member->bindValue(":memPsw", $data["memPsw"]);
    $member->bindValue(":memBD", $data["memBD"]);
    $member->bindValue(":memPhone", $data["memPhone"]);
    $member->bindValue(":Address", $data["Address"]);
    $member->execute();

    $sqllogin = "select * from member where member_mail=:memId and member_psw=:memPsw "; //登入
    $memberlogin = $pdo->prepare($sqllogin);
    $memberlogin->bindValue(":memId", $data["email"]);
    $memberlogin->bindValue(":memPsw", $data["memPsw"]);
    $memberlogin->execute();
    if ($memberlogin->rowCount() != 0) {
      $memRow = $memberlogin->fetch(PDO::FETCH_ASSOC);
      $_SESSION["memNo"] = $memRow["member_no"];
      $_SESSION["memEmail"] = $memRow["member_mail"];
      $_SESSION["memName"] = $memRow["member_name"];
      $_SESSION["memPsw"] = $memRow["member_psw"];
    } else {
      echo "輸入錯誤";
    }
    if ($member->rowCount() != 0) {
      echo "Register Sucess";
    } else {
      echo "Fail";
    }
  } catch (PDOException $e) {
    // echo "error";
    echo $e->getMessage();
  }
}
