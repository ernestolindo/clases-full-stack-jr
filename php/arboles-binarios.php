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
    $flag = true;
    while ($flag) {
      // Cuando el nodo ya exista previamente
      if ($newNode->value === $currentNode->value) return "El nodo ya existe\n";

      // si ya tenemos un dato y es mayor que el nodo actual...
      if ($newNode->value > $currentNode->value) {
        if ($currentNode->right === null) {
          // lo insertamos a la derecha
          $currentNode->right = $newNode;
          $flag = false;
        }
        $currentNode = $currentNode->right;
      }
      // si es menor
      else {
        if ($currentNode->left === null) {
          $currentNode->left = $newNode;
          return $newNode;
        }
        $currentNode = $currentNode->left;
      }
    }
  }
}

$arbolito = new BinaryTree();
$arbolito->insert(5);
$arbolito->insert(10);
$arbolito->insert(3);
$arbolito->insert(15);
$arbolito->insert(12);
print($arbolito->insert(12));
print_r($arbolito);
