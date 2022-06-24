
<?php
session_start();
$errMsg = "";
try {
	require_once("connect_cgd101g2.php");
	
			$sql5 = "SELECT * FROM `designer` WHERE manager_no = :cur_manager";
            $designer = $pdo->prepare($sql5);
	        $designer -> bindValue(":cur_manager", $_SESSION["manager_no"]);
			$designer -> execute();
            $designerRows = $designer->fetch(PDO::FETCH_ASSOC);

            echo json_encode($designerRows);

	
} catch (PDOException $e) {
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
// echo $errMsg;

?>    
