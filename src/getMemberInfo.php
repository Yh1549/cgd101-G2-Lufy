<?php
session_start();
try {
	require_once("connect_lufy.php");
	if (isset($_SESSION["memNo"]) == true) { //已登入
		$memberTotal = []; //將會員資料放入關聯性陣列
		$sql = "select * from member where member_mail=:memId and member_psw=:memPsw "; //登入
		$member = $pdo->prepare($sql);
		$member->bindValue(":memId", $_SESSION["memEmail"]);
		$member->bindValue(":memPsw", $_SESSION["memPsw"]);
		$member->execute(); //取得已登入者帳號
		if ($member->rowCount() != 0) {
			$memRow = $member->fetch(PDO::FETCH_ASSOC);
			$memberTotal["member"] = json_encode($memRow);
			// 訂單回傳
			$sqlorder = "select * from product_order where member_no=:curId";
			$memberorder = $pdo->prepare($sqlorder);
			$memberorder->bindValue(":curId", $memRow["member_no"]);
			$memberorder->execute();
			$orderRow = $memberorder->fetchAll(PDO::FETCH_ASSOC);

			$memberTotal["memberorder"] = json_encode($orderRow);

			echo json_encode($memberTotal); //回傳
			//私藏回傳
			// $sqlorder = "select * from product_order where member_no=:curId";
			// $memberorder = $pdo->prepare($sqlorder);
			// $memberorder->bindValue(":curId", $memRow["member_no"]);
			// // $memberorder->bindValue(":curId", "1");
			// $memberorder->execute();
			// $orderRow = $memberorder->fetchAll(PDO::FETCH_ASSOC);
			// echo json_encode($orderRow);
		};
	} else {
		echo "No login";
	}
} catch (PDOException $e) {
	// echo "error";
	echo $e->getMessage();
}
