<?php
try{
require_once("connect_lufy.php");
    
    
    
}catch(PDOException $e){
    echo $e->getMessage(); 
}
    
?>