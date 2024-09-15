abstract class Producto{
  // Define las caracteristicas basicas de un producto
  constructor(public nombre:string, public precio:number){}
    // Declaramos un metodo abstracto que cada clase hija debe implementar
    abstract calcularPrecio(): number;
}

export default Producto;