<?php
    $dbname="lufy";
    $user = "root";
    $password="mike4358";
    $dsn="mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
    $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];
    
    $pdo = new PDO($dsn,$user,$password,$options);
 ?>