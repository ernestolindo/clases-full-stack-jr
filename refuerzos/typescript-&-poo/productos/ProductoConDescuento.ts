import Producto from "./Producto";

class ProductoConDescuento extends Producto {
  constructor(nombre:string, precio:number, public descuento:number){
    super(nombre, precio);
  }

  // Sobreescribimos el metodo calcularPrecio para aplicar un descuento
  calcularPrecio(): number {
    // Aplicamos descuento al precio original
    return this.precio * (1 - this.descuento / 100);1
  }

}

export default ProductoConDescuento;