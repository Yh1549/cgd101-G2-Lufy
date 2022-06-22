<?php
    $dbname = "tibamefe_cgd101g2";
    $user = "tibamefe_since2021"; 
    $password = "vwRBSb.j&K#E"; 

    $dsn="mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
    $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL,PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];
    
    $pdo = new PDO($dsn, $user, $password, $options);
 ?>