<?php
  header('Access-Control-Allow-Origin: *');

  $winesArray = [['id' => 0, 'name' => "myWinery1"],
                 ['id' => 1, 'name' => "myWinery2"],
                 ['id' => 2, 'name' => "myWinery3"],
                 ['id' => 3, 'name' => "myWinery4"]];

  echo json_encode($winesArray);
