// Clase que hereda de Producto, representa un pupusa en nuestro sistema
import Producto from "./Producto";

class Pupusa extends Producto {
  calcularPrecio(): number {
    // Devolver el precio sin aplicar descuento
    return this.precio;
  }
}

export default Pupusa;