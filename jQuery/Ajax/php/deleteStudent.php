<?php
  // echo json_encode($_POST['x']); //ajax post提交时候的调试手段
  $ids = $_POST['x'];  //{x:[1,1,1,1,1]}
  $tmp = implode(" OR `id` = ", $ids);
  $mysqli = new mysqli('localhost','root','','test');
  $sql = "DELETE FROM `student` WHERE `id` = ".$tmp;
  $mysqli->query($sql);
?>
