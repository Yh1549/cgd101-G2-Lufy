<?php 
try {
	require_once("connect_cgd101g2.php");
    
	//執行sql指令
	$sql = "update manager set manager_name=:manager_name, role=:role, manager_account=:manager_account, manager_password=:manager_password, state=:state where manager_no=:manager_no";

    $managers = $pdo->prepare($sql); //編譯指令
    $managers->bindValue(":manager_no", $_POST["manager_no"]); //代入資料
    $managers->bindValue(":manager_name", $_POST["manager_name"]);
    $managers->bindValue(":role", $_POST["role"]);
    $managers->bindValue(":manager_account", $_POST["manager_account"]);
    $managers->bindValue(":manager_password", $_POST["manager_password"]);
    $managers->bindValue(":state", $_POST["state"]);
    $managers->execute();
	echo "異動成功~";
    //header("location:backend.html");

} catch (PDOException $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	// echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>