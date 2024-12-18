<?php

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
