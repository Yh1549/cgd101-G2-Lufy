<?php
session_start();
if(isset($_SESSION["memNo"]) == true){ //已登入
	$result = ["memNo"=>$_SESSION["memNo"],  "memName"=>$_SESSION["memName"], "memEmail"=>$_SESSION["memEmail"]];
	echo json_encode($result);
}else{
	echo "No login";
}
