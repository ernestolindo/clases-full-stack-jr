<?php
// Comentario de una linea

/*
  Comentario
  multi
  linea
  */

//Variables
$nombre;

$nombre = "Ernesto";
$apellido = 'Lindo';

//Imprimir datos
echo "Holiwis llegamos a PHP \n";

print "Holiwis desde print \n";

// Template
$template = "{$nombre} {$apellido} \n";
echo ($template);
//tipos de numeros
$entero = 7;
$decimal = 7.5;

// utilizar variables

print($nombre . " " . $apellido . "\n");
print($entero . $decimal . "\n"); // Se concatenan
print($entero + $decimal . "\n"); // Se suman
