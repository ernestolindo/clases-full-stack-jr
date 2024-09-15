// Clase que hereda de Producto, representa un cafe en nuestro sistema
import Producto from "./Producto";

class Cafe extends Producto {
  calcularPrecio(): number {
    // Devolver el precio sin aplicar descuento
    return this.precio;
  }
}

export default Cafe;