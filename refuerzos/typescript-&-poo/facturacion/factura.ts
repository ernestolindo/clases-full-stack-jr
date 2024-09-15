// Aplicamos poliformismo, ya que podemos utilizar diferentes metodos de pago

import Cliente from '../clientes/Cliente';
import Producto from '../productos/Producto';
import MetodoPago from '../pagos/MetodoPago';

class Factura {
  // Guardamos el total de la factura como una propiedad privada
  private total: number = 0;
  
  constructor(
    public cliente:Cliente, // Cliente que realiza la compra
    private producto:Producto[], // Productos comprados
    private metodoPago:MetodoPago  // Efectivo o Tarjeta
  ) {
    this.calcularTotal(); // Al crear la factura, automaticamente calcularemos el total 
  }

  // Metodo privado para calcular el total sumando los precios de todos los productos
  private calcularTotal() {
    this.total = this.producto.reduce((sum, producto) => sum + producto.calcularPrecio(), 0);
  }
}