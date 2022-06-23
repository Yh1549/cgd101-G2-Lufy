<?php
    $dbname= "lufy";
    $user = "root";
<<<<<<< HEAD
    $password="mike4358";
=======
    $password="\$Linz791012";
>>>>>>> 495695b36cda7ec1589f6317fa320da3444bd80d

    $dsn="mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
    $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL,PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];
    
    $pdo = new PDO($dsn, $user, $password, $options);
 ?>