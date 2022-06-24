<?php
try {
	require_once("connect_cgd101g2.php");
    $designersql = "select * from designer";
    $designer = $pdo->prepare($designersql);
    $designer->execute();
    $designerRow=$designer->fetchALL(PDO::FETCH_ASSOC);
    echo json_encode($designerRow);
} catch (PDOException $e) {
	echo $e->getMessage();
}

?>