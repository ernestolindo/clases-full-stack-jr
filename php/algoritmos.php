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
