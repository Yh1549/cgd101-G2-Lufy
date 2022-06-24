<?php 
	try{
		require_once("connect_cgd101g2.php");

		$sql = "SELECT DISTINCT c.category_no, c.category_imgpath, c.category_name
				FROM product_category c
				JOIN product p ON  p.category_no = c.category_no"; //準備好sql指令
		$products = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
		$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
		
		echo json_encode($prodRows,true);

	}catch(PDOException $e){
		echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
		echo "錯誤訊息 : ", $e->getMessage(), "<br>";
		echo "錯誤行號 : ", $e->getLine(), "<br>";
	}
?>