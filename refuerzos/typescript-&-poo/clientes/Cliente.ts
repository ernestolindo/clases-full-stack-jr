// Esta clase gestiona la info y las compras del cliente
// Se asegura de que los productos comprados esten encapsulados

import Producto from "../productos/Producto";

class Cliente{
  // Usamos un array privado para almacenar las compras
  private compras:Producto[] = [];

  constructor(public nombre:string){}

  // Metodo para agregar un producto al carrito de compras 
  agregarCompra(producto:Producto){
    this.compras.push(producto);  
  }

  // Metodo para obtener la lista de compras. Util para generar la factura.
  obtenerCompras(): Producto[] {
    return this.compras;
  }

}

export default Cliente;