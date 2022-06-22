<?php
session_start();

try {
    require_once("connect_cgd101g2.php");
    $total = [];
    $sql = "select member.member_name, product_order.recipient_name, product_order.	recipient_phone, product_order.recipient_address, product_order.credit_card, product_order.order_total from member join product_order on member.member_no=product_order.member_no where product_order.order_no=:order_no";
    $order = $pdo->prepare($sql);
    $order->bindValue(":order_no", $_GET["id"]);
    $order->execute();
    $orderRow = $order->fetchAll(PDO::FETCH_ASSOC);
$total["orderRow"] = json_encode($orderRow);

    $detailsql = "select orderdetail.product_no, orderdetail.order_count, orderdetail.product_price, product.name from orderdetail join product on orderdetail.product_no=product.product_no where order_no=:order_no";
    $detail = $pdo->prepare($detailsql);
    $detail->bindValue(":order_no",$_GET["id"]);
    $detail->execute();
    $detailRow = $detail->fetchAll(PDO::FETCH_ASSOC);
    $total["detailRow"] = json_encode($detailRow);

echo json_encode($total);


} catch (PDOException $e) {
    // echo "error";
    echo $e->getMessage();
}
