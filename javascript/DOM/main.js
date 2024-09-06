console.log('Estoy andando');
let elementoDOM = document.getElementById('saludo');
console.log(elementoDOM);

//innerHTML vs innerText
console.log(elementoDOM.innerHTML);
console.log(elementoDOM.innerText);

elementoDOM.innerText = 'Te cambie desde el JS';
console.log(elementoDOM.innerText);

elementoDOM.innerHTML = '<span>Cambie otra vez</span>';
console.log(elementoDOM.innerHTML);

// Agarrar otro elemento del HTML
const contenido = document.querySelector('#content');

contenido.innerHTML = '<h1>Ingresado desde JS</h1>';
console.log(contenido);

// Una solucion dinamica necesita dinamismo (eventos)

const btnApretable = document.getElementById('btn-magia');

btnApretable.addEventListener('click', () => {
  alert('Abra Cadabra');
  console.log('Copperfield');
})

/*
Realiza una funcion que reciba un array numerico y retorne un array completamente numero solamente con los
numeros que sean multiplos de 3 y que la suma de todos sus numeros sea menos de 100. Cuando se llega a 100
se corta el array y se retorna. SE SUMAN LOS MULTIPLOS DE 3.

*/

function apretandoBoton(){
  let nombre = prompt("Ingresa tu nombre");
  let apellido = prompt("Ingresa tu apellido");
  alert(nombre + " " + apellido);
}

function cambiandoInput(e){
  console.log(e.target.value);
}


