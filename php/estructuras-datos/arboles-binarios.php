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

    // Método para eliminar un nodo en el árbol
    function delete($data)
    {
        $this->root = $this->deleteNode($data, $this->root);
    }

    // Función auxiliar para encontrar el valor mínimo en un subárbol
    function findMinValue($node)
    {
        while ($node->left !== null) {
            $node = $node->left;
        }
        return $node->value;
    }

    // Método para realizar la eliminación recursiva de un nodo
    function deleteNode($data, $node)
    {
        if ($node === null) {
            return null;  // Caso base: el nodo no se encuentra
        }

        // Buscar el nodo a eliminar
        if ($data < $node->value) {
            $node->left = $this->deleteNode($data, $node->left);  // Está en el subárbol izquierdo
        } elseif ($data > $node->value) {
            $node->right = $this->deleteNode($data, $node->right);  // Está en el subárbol derecho
        } else {
            // Nodo encontrado; ahora revisamos los casos de eliminación

            // Caso 1: Nodo sin hijos (nodo hoja)
            if ($node->left === null && $node->right === null) {
                return null;  // Eliminamos el nodo simplemente desconectándolo
            }

            // Caso 2: Nodo con un solo hijo
            if ($node->left === null) {
                return $node->right;  // Conectamos el padre del nodo eliminado al hijo derecho
            } elseif ($node->right === null) {
                return $node->left;  // Conectamos el padre del nodo eliminado al hijo izquierdo
            }

            // Caso 3: Nodo con dos hijos
            // Encontramos el sucesor en orden (mínimo en el subárbol derecho)
            $node->value = $this->findMinValue($node->right);

            // Eliminamos el nodo que contenía el sucesor en orden
            $node->right = $this->deleteNode($node->value, $node->right);
        }
        return $node;
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
