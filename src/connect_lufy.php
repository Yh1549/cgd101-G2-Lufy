<?php
    $dbname= "lufy";
    $user = "root";
<<<<<<< HEAD
    $password="mike4358";
=======
    $password="\$Linz791012";

>>>>>>> c4fc2d390abe95078ca4a8767e6558fd3d8406b4

    $dsn="mysql:host=localhost;port=3306;dbname=$dbname;charset=utf8";
    $options = [PDO::ATTR_CASE=>PDO::CASE_NATURAL,PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION];
    
    $pdo = new PDO($dsn, $user, $password, $options);
 ?>