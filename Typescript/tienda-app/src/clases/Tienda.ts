import { Producto } from "./Producto";

class Tienda {
  // Inicializamos un array de productos vacio
  private productos: Producto[] = [];

  // Si hay productos en el localStorage los viene a traer con este constructor
  constructor() {
    // Ver si ya hay algo guardado
    this.productos = JSON.parse(localStorage.getItem("productos" || "[]"));
  }

  agregarProducto(producto: Producto) {
    // Agregar el producto que nos dan por param al final del array
    this.productos.push(producto);
  }
}
