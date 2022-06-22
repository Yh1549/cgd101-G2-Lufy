<?php
$json = $_POST["json"];
$data = json_decode($json, true);
$jsonCount = count($data);

if (array_key_first($data) == 'memName' && $jsonCount == 1) {
  try {
        // Name跟email檢查有無重複
    require_once("connect_lufy.php");
    $sql = "select * from member where member_name=:memName";
    $member = $pdo->prepare($sql);
    $member->bindValue(":memName", $data["memName"]);
    $member->execute();
    if ($member->rowCount() != 0) {
      echo "This Name has already been registered";
    } else {
      echo "This name okok";
    }
  } catch (PDOException $e) {
    echo "error";
  }
}else if (array_key_first($data) == 'email' && $jsonCount == 1) {
  try {
    // Name跟email檢查有無重複
    require_once("connect_lufy.php");
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
}else if($jsonCount > 1){
  try {
    require_once("connect_lufy.php");
    $sql = "insert into member(member_name, member_mail, member_psw, member_birthday, member_tel, member_address, member_state, member_pic, credit_card, card_date, card_checkCode) values(:memName, :email, :memPsw, :memBD, :memPhone, :Address, 0, '', '', '2000-01-01', '000')";
    $member = $pdo->prepare($sql);
    $member->bindValue(":memName", $data["memName"]);
    $member->bindValue(":email", $data["email"]);
    $member->bindValue(":memPsw", $data["memPsw"]);
    $member->bindValue(":memBD", $data["memBD"]);
    $member->bindValue(":memPhone", $data["memPhone"]);
    $member->bindValue(":Address", $data["Address"]);
    $member->execute();
    if ($member->rowCount() != 0) {
      echo "Register Sucess";
      // $memRow = $member->fetch(PDO::FETCH_ASSOC);//接住資料庫成為陣列
    } else {
      echo "Fail";
    }
  } catch (PDOException $e) {
    // echo "error";
    echo $e->getMessage();
  }










}
?>