<?php

// array
// $array = new ArrayObject();

// declaracion de array literal
$array = [];

// declaracion de array a traves de metodo
// $array = array();

array_push($array, 3);
array_push($array, 4);

array_unshift($array, 5);

// Eliminar datos
array_shift($array);
array_pop($array);

print_r($array);

// arrays asociativos
$arraysote = ["nombre" => "Ernesto", "apellido" => "Lindo"];
print(array_key_last($arraysote));
echo "\n";
print_r($arraysote[array_key_last($arraysote)]);
echo "\n";
print(count($arraysote));
echo "\n";
print_r($arraysote);

// CLASES Y OBJETOS

class Persona
{
  // Propiedades y atributos con modificadores de acceso\
  public $nombre;
  public $edad;

  function __construct($nombreParam, $edadParam)
  {
    $this->nombre = $nombreParam;
    $this->edad = $edadParam;
  }

  // metodos
  function respirar()
  {
    return "Estoy respirando";
  }
}

$personita = new Persona("Julio", "12");
print($personita->nombre);
print($personita->respirar());
print_r($personita);
