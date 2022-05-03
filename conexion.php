<?php

  class Conexion
  {
    function ConexionDB(){
      $host= "localhost";
      $dbname= "culichi_tours";
      $username= "root";
      $pass="";

      try {
        $conn= new PDO ("mysql:host=$host;dbname=$dbname",$username,$pass);
        echo "Conexion establecida";
      } catch (PDOException $exp) {
        echo ("Error de conexion a la base de datos: $dbname, error: $exp");
      }
      return $conn;
    }
  }
    

?>