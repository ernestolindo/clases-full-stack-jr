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

//Stack (pila) -> LIFO LastInFirstOut

class Stack
{
  public $stack;

  function __construct()
  {
    $this->stack = array();
  }

  function add($value)
  {
    array_push($this->stack, $value);
  }

  function delete()
  {
    array_pop($this->stack);
  }
}

$pilaRopa = new Stack();
$pilaRopa->add("Camiseta");
$pilaRopa->add("Camisa");
$pilaRopa->add("Pantalon");
$pilaRopa->delete();
print_r($pilaRopa);

// Queue o colas -> FIFO (first in, first out)

class Queue
{
  public $queue;

  function __construct()
  {
    $this->queue = array();
  }

  function enqueue($value)
  {
    array_push($this->queue, $value);
  }

  function dequeue()
  {
    return array_shift($this->queue);
  }
}

$caseta1 = new Queue();
$caseta1->enqueue("Ernesto");
$caseta1->enqueue("Diego");
$caseta1->enqueue("Claudia");

print_r($caseta1);

print("Dato eliminado: {$caseta1->dequeue()} \n");
print_r($caseta1);

class Node
{
  public $value;
}

class LinkedList {}
