<?php

class Node
{
  public $data; // Stores the data of the node
  public $next; // Points to the next node

  public function __construct($data)
  {
    $this->data = $data;
    $this->next = null;
  }
}

class LinkedList
{
  public $head; // The first node in the list

  public function __construct()
  {
    $this->head = null; // The function starts off with no nodes
  }

  // Add a new node to the end  of the list
  public function append($data)
  {
    $newNode = new Node($data);
    // Check if the new node added is the first one
    if ($this->head === null) {
      // Set the new node as the head
      $this->head = $newNode;
      return;
    }

    // Create a variable and set it to the first node
    $current = $this->head;
    // Move through the nodes' next property
    while ($current->next !== null) {
      $current = $current->next;
    }
    // The node's property which points to the next node is set to the new node
    $current->next = $newNode;
  }

  // Display the linked list
  public function display()
  {
    $current = $this->head;
    while ($current !== null) {
      echo $current->data . " -> ";
      $current = $current->next;
    }
    echo "null\n";
  }
}

$list = new LinkedList();
$list->append(10);
$list->append(20);
$list->append(30);
$list->display();
