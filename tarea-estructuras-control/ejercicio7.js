function getInfoNumeros(n1, n2, n3, n4, n5, n6, n7, n8, n9, n10) {
  const numeros = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];
  let negativos = 0;
  let positivos = 0;
  let multiplosQuince = 0;
  let sumPares = 0;

  for (let n of numeros) {
    if (n < 0) negativos++;
    else if (n > 0) positivos++;

    if (n % 15 === 0) multiplosQuince++;

    if (n % 2 === 0) sumPares += n;
  }
  return `
  ${negativos} negativos
  ${positivos} positivos
  ${multiplosQuince} multiplos de 15
  ${sumPares} es la suma de los pares
  `;
}

console.log(getInfoNumeros(1, -2, 3, 4, 5, 6, -7, 8, -9, 15));
