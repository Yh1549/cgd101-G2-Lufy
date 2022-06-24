<?php
try {
	require_once("connect_lufy.php");
    $designersql = "select * from designer where des_no=:des_no";
    $designer = $pdo->prepare($designersql);
    $designer->bindValue(":des_no", $_GET["id"]);
    $designer->execute();
    $designerRow=$designer->fetch(PDO::FETCH_ASSOC);
    echo json_encode($designerRow);
} catch (PDOException $e) {
	echo $e->getMessage();
}

?>