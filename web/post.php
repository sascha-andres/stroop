<?php

try {

  $json = file_get_contents('php://input');
	$objects = json_decode($json);
	
				$date = new DateTime();
				$name = $date->format('Ymd-His');
				$storeas = realpath(dirname(__FILE__))."/../lernen.livingit.de_data/".$name.".txt";
				file_put_contents($storeas, $json);
				
		//var_dump(json_decode($json));
		//var_dump(json_decode($json, true));
		
	} catch (Exception $e) {
		echo 'Exception abgefangen: ',  $e->getMessage(), "\n";
	}
?>
