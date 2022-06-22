<?php 
try {
	require_once("connect_lufy.php");
	$sql = "update member set member_state=:member_state where member_no=:member_no";
    $member = $pdo->prepare($sql);
    $member->bindValue(":member_no", $_POST["member_no"]);
    $member->bindValue(":member_state", $_POST["member_state"]);
    $member->execute();
	echo "異動成功~";
} catch (PDOException $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
}
?>