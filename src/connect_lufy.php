<?php
    $dbname= "lufy";
    $user = "root";
    $password="mike4358";
<<<<<<< HEAD
=======


>>>>>>> 4bdbbae9938e59447192f1081688fa13534f34bd
    $dsn="mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
    $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL,PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];
    
    $pdo = new PDO($dsn, $user, $password, $options);
 ?>