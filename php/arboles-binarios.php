<?php

class Node
{
  public $value;
  public $left;
  public $right;

  function __construct($data)
  {
    $this->value = $data;
    $this->left = null;
    $this->right = null;
  }
}

class BinaryTree
{
  public $root; // como el head en listas enlazadas
  function __construct()
  {
    $this->root = null;
  }

  function insert($data)
  {
    // Crear nuevo nodo 
    $newNode = new Node($data);

    // Tenemos algun nodo en la raiz? / La raiz esta vacia?
    if ($this->root === null) {
      // Guardamos el nuevo nodo en la raiz
      $this->root = $newNode;
      return $this->root;
    }

    // Variable auxiliar: para ir avanzando de nodos, arrancando en la raiz

    $currentNode = $this->root;

    // si ya tenemos un dato -- si es mayor que el nodo actual...
    if ($newNode->value > $currentNode->value) {
      // lo insertamos a la derecha
      $currentNode->right = $newNode;
      return $newNode;
    }
    // si es menor
    else {
      $currentNode->left = $newNode;
      return $newNode;
    }
  }
}

$arbolito = new BinaryTree();
$arbolito->insert(5);
$arbolito->insert(10);
$arbolito->insert(3);
$arbolito->insert(15);
print_r($arbolito);
