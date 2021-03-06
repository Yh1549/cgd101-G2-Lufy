<?php
session_start();
try {
  require_once("connect_cgd101g2.php");
  $adminsql = "select * from manager where manager_account=:adminId and manager_password=:adminPsw "; //登入
  $admin = $pdo->prepare($adminsql);
  $admin->bindValue(":adminId", $_POST["adminId"]);
  $admin->bindValue(":adminPsw", $_POST["adminPsw"]);
  $admin->execute();
  if ($admin->rowCount() != 0) {
    $adminRow = $admin->fetch(PDO::FETCH_ASSOC);
    if ($adminRow["state"] != 1) {
      $_SESSION["manager_no"] = $adminRow["manager_no"];
      $_SESSION["manager_account"] = $adminRow["manager_account"];
      $_SESSION["manager_name"] = $adminRow["manager_name"];
      $_SESSION["role"] = $adminRow["role"];
      $_SESSION["state"] = $adminRow["state"];
      if ($adminRow["role"] == "後台管理人員") {
        echo "backend.html";
      } else if ($adminRow["role"] == "設計師") {
        echo "backendDesigner.html";
      }
    } else {
      echo "wrong account";
    }
  } else {
    echo "wrong account";
  }
} catch (PDOException $e) {
  echo $e->getMessage();
}
