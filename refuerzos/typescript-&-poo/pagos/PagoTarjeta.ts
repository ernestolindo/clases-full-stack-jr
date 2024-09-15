// Crear la clase que implemente el pago en tarjeta siguiendo la interfaz MetodoPago 
// Define como se procesa un pago en tarjeta
import MetodoPago from "./MetodoPago";

class PagoTarjeta implements MetodoPago {
  // Este metodo imprime en consola que el pago fue realizado en tarjeta
  procesarPago(cantidad:number) {
    console.log(`Pago de $${cantidad} realizado en tarjeta`);
  }
}

export default PagoTarjeta;