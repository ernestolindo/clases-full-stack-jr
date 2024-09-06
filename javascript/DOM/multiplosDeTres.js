function filtrarMultiplosDeTres(arr){
  if(arr.length < 1) return arr;

  let resultado = [];
  let suma = 0;
  let i = 0;

  while(i < arr.length){
    if(arr[i] % 3 === 0){
      suma += arr[i];

      if(suma < 100){
        resultado.push(arr[i]);
      }else{;
        return resultado; 
      }
    }
    i++;
  }
  return resultado;
}

let array = [6, 17, 23, 49, 51, 10, 12, 4, 3, 36, 39, 90];
console.log(filtrarMultiplosDeTres(array));
