import { Producto } from "./Producto";

export class Tienda {
  // Inicializamos un array de productos vacio
  private productos: Producto[] = [];

  // Si hay productos en el localStorage los viene a traer con este constructor
  constructor() {
    // Ver si ya hay algo guardado en el local y traerlo
    this.productos = JSON.parse(localStorage.getItem("productos") || "[]");
  }

  agregarProducto(producto: Producto) {
    // Agregar el producto que nos dan por param al final del array
    this.productos.push(producto);
    this.refreshLocal();
  }

  // Guardamos todos los productos de this.productos dentro del localStorage key "Productos"
  refreshLocal() {
    // Actualizar la lista de productos en el localStorage
    localStorage.setItem("Productos", JSON.stringify(this.productos));
  }
}
