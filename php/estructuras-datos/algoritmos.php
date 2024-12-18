<?php

// bubbleSort

function bubbleSort($arr)
{
  if (count($arr) <= 1) return "Necesito al menos dos datos en el array";

  for ($i = 0; $i < count($arr); $i++) {

    for ($j = 0; $j < count($arr) - 1; $j++) {
      if ($arr[$j] < $arr[$j + 1]) {
        $temp = $arr[$j];
        $arr[$j] = $arr[$j + 1];
        $arr[$j + 1] = $temp;
      }
    }
  }
  return $arr;
}

$arraycito = [8, 10, 5, 40, 7];
print_r(bubbleSort($arraycito));

// insertion sort

function insertionSort($arr)
{

  if (count($arr) <= 1) return "Que gracioso que sos!";

  for ($i = 1; $i < count($arr); $i++) {
    $key = $arr[$i];

    $j = $i - 1;
    while ($j >= 0 && $arr[$j] > $key) {
      $arr[$j + 1] = $arr[$j];
      $j--;
    }
    $arr[$j + 1] = $key;
  }
  return $arr;
}

print_r(insertionSort($arraycito));

// function merge sort

$arraycito = [8, 10, 5, 40, 7];
function mergeSort($arr)
{
  if (count($arr) <= 1) return $arr;

  $mid = floor(count($arr) / 2);

  $left = array_slice($arr, 0, $mid);
  $right = array_slice($arr, $mid);

  $left = mergeSort($left);
  $right = mergeSort($right);

  // print_r($left);
  // print_r($right);
  return merge($left, $right);
}

function merge($left, $right)
{
  $result = [];

  while (count($left) > 0 && count($right) > 0) {
    if ($left[0] <= $right[0]) {
      array_push($result, array_shift($left));
    } else {
      array_push($result, array_shift($right));
    }
  }

  while (count($left) > 0) {
    array_push($result, array_shift($left));
  }
  while (count($right) > 0) {
    array_push($result, array_shift($right));
  }

  return $result;
}

print_r(mergeSort($arraycito));
