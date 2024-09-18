import './style.css';
import { Producto } from './clases/Producto';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Gestion de tiendita</h1>
  </div>

  <form id='formProducto'>
    <section>
      <label>Nombre del producto</label>
      <input type='text' id='nombre' name='nombre' placeholder='Ingresa el nombre del producto'>
    </section>

    <section>
      <label>Precio</label>
      <input type='text' id='precio' name='precio' placeholder='Ingresa su precio'>
    </section>

    <section>
      <label>Cantidad</label>
      <input type='text' id='cantidad' name='cantidad' placeholder='Ingresa su cantidad'>
    </section>

    <button type='submit'>Iniciar sesión</button>
  </form>
`
// document.querySelector<HTMLDivElement>('#parrafo')!.innerHTML = 'Este es texto desde el p';
const form = document.getElementById('formProducto') as HTMLFormElement;

form.addEventListener('submit', (e:SubmitEvent) => {
  e.preventDefault();

  const id = Date.now();
  // Seleccionamos los elementos a controlar y retiramos su valor
  const nombre = (document.getElementById('nombre') as HTMLInputElement).value; 
  const precio = parseFloat((document.getElementById('precio') as HTMLInputElement).value); 
  const cantidad = parseInt((document.getElementById('cantidad') as HTMLInputElement).value); 

  console.log(id);
  console.log(nombre);
  console.log(precio);
  console.log(cantidad);

  let productito = new Producto(id, nombre, precio, cantidad); 
  console.log(productito);

  localStorage.setItem('productos', JSON.stringify(productito));
});
