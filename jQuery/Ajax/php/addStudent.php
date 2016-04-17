<?php
  $mysqli = new mysqli('localhost','root','','test');
  $sql = "INSERT INTO `student`( `xuehao`, `name`, `sex`, `age`, `score`) VALUES ('','','','','')";
  $mysqli->query($sql);
?>
