
<?php
session_start();
$errMsg = "";
try {
	require_once("../../connect_lufy.php");
	
			$sql = "SELECT * FROM `designer` WHERE manager_no = :cur_manager";
            
			$designer = $pdo->prepare( $sql );
		
			$designer -> bindValue(":cur_manager", $_SESSION["manager_no"]);
			
			
			$designerRows = $designer->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($designerRows);

			// echo "商品編號:", $pdo->lastInsertId();
           
		

	
} catch (PDOException $e) {
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
}
// echo $errMsg;

?>    
