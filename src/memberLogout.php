<?php 
session_start();
//---1
// unset($_SESSION["memNo"]);
// unset($_SESSION["memEmail"]);
// unset($_SESSION["memName"]); 
//---2(全刪)
//session_unset();
//---3(連session檔都刪)
session_destroy();
?>