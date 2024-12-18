<?php

// BUBBLE SORT

function bubbleSort($array)
{
  $n = count($array);  // Obtener el tamaño del array

  // Recorrer todo el array
  for ($i = 0; $i < $n - 1; $i++) {
    // Últimos elementos ya están ordenados
    for ($j = 0; $j < $n - $i - 1; $j++) {
      // Si el elemento actual es mayor que el siguiente
      if ($array[$j] > $array[$j + 1]) {
        // Intercambiar los elementos
        $temp = $array[$j];
        $array[$j] = $array[$j + 1];
        $array[$j + 1] = $temp;
      }
    }
  }
  return $array;  // Devolver el array ordenado
}

// Ejemplo de uso
$array = [64, 34, 25, 12, 22, 11, 90];
echo "Array original: \n";
print_r($array);

$sortedArray = bubbleSort($array);
echo "\nArray ordenado: \n";
print_r($sortedArray);

// INSERTION SORT

function insertionSort($array)
{
  $n = count($array);  // Obtener el tamaño del array

  // Recorrer el array desde el segundo elemento (índice 1)
  for ($i = 1; $i < $n; $i++) {
    $key = $array[$i];  // El elemento actual a insertar
    $j = $i - 1;

    // Mover los elementos mayores que $key hacia la derecha
    while ($j >= 0 && $array[$j] > $key) {
      $array[$j + 1] = $array[$j];  // Mover el elemento
      $j--;
    }

    // Insertar el elemento en la posición correcta
    $array[$j + 1] = $key;
  }

  return $array;  // Devolver el array ordenado
}

// Ejemplo de uso
$array = [64, 34, 25, 12, 22, 11, 90];
echo "Array original: \n";
print_r($array);

$sortedArray = insertionSort($array);
echo "\nArray ordenado: \n";
print_r($sortedArray);
