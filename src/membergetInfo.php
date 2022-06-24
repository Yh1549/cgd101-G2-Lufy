<?php
session_start();
try {
	require_once("connect_cgd101g2.php");
	if (isset($_SESSION["memNo"])) { //已登入
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
			$sqlorder = "select order_no, order_datetime, order_state,  order_total  from product_order where member_no=:curId order by order_no";
			$memberorder = $pdo->prepare($sqlorder);
			$memberorder->bindValue(":curId", $memRow["member_no"]);
			$memberorder->execute();
			$orderRow = $memberorder->fetchAll(PDO::FETCH_ASSOC);
			$memberTotal["memberorder"] = json_encode($orderRow); //將訂單資料放入membertotal
			//私藏回傳
			$sqlfavorite = "select p.product_no, p.name, p.on_market, p.price, pi.image_path from favorite f join product p on f.product_no = p.product_no join product_image pi on f.product_no = pi.product_no where member_no=:curId group by p.name;";
			$memberfavorite = $pdo->prepare($sqlfavorite);
			$memberfavorite->bindValue(":curId", $memRow["member_no"]);
			$memberfavorite->execute();
			$favoriteRow = $memberfavorite->fetchAll(PDO::FETCH_ASSOC);
			$memberTotal["memberfavorite"] = ($favoriteRow);
			echo json_encode($memberTotal);
		};
	} else {
		echo "No login";
	}
} catch (PDOException $e) {
	// echo "error";
	echo $e->getMessage();
}
