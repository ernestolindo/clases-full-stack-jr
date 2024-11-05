<?php

class Node
{
  public $value;
  public $next;

  function __construct($data)
  {
    if ($data === null) {
      $this->value = 0;
      $this->next = null;
    } else {
      $this->value = $data;
      $this->next = null;
    }
  }
}

class LinkedList
{
  public $head;

  function __construct()
  {
    $this->head = null;
  }

  function insert($data)
  {
    $newNode = new Node($data);

    if ($this->head === null) {
      $this->head = $newNode;
    } else {
      //Variable auxiliar
      $aux = $this->head;

      while ($aux->next !== null) {
        $aux = $aux->next;
      }

      $aux->next = $newNode;
    }
  }

  function delete($data)
  {
    if ($this->head === null) {
      return "La lista estaba previamente vacia. \n";
    }

    if ($this->head->value === $data) {
      print("Se Encontro. \n");
      $this->head = $this->head->next;
      return "Encontrado";
    }


    $aux = $this->head;


    while ($aux->next !== null) {
      if ($aux->next->value == $data) {
        $aux->next = $aux->next->next;
        print("Si se elimino. \n");
        return "Se ha eliminado el dato.";
      }

      $aux = $aux->next;
    }

    return "Ese dato no existe en la lista.";
  }

  // Generar un metodo el cual me imprima o retorne el length de la lista


  // Generar un metodo para vaciar la lista

}

$listita = new LinkedList();
$listita->insert(3);
$listita->insert(5);
$listita->insert(100);
print($listita->delete(5) . "\n");
print_r($listita);
