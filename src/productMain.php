<?php 
	try{
		require_once("connect_lufy.php");

		$sql = "SELECT DISTINCT  p.product_no, p.name, i.product_show, i.image_path, c.category_no
				FROM product p 
				JOIN product_image i ON p.product_no = i.product_no
				JOIN product_category c ON p.category_no = c.category_no
				WHERE i.product_show = 1"; //準備好sql指令
		$products = $pdo->query($sql);//將sql指令送到mysql去執行, 回傳的是pdoStatement
		$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
		echo json_encode($prodRows,true);

		// 撈出 product_no
		function getNo($n)
	{
		return ($n['product_no']);
	}
		$product_no_list = array_map('getNo',$prodRows);

	}catch(PDOException $e){
		echo "系統暫時無法提供服務, 請聯絡系統維護人員<br>";
		echo "錯誤訊息 : ", $e->getMessage(), "<br>";
		echo "錯誤行號 : ", $e->getLine(), "<br>";
	}
?>