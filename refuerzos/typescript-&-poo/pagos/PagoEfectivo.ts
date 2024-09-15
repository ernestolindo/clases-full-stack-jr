// Crear la clase que implemente el pago en efectivo siguiendo la interfaz MetodoPago 
// Define como se procesa un pago en efectivo
import MetodoPago from "./MetodoPago";

class PagoEfectivo implements MetodoPago {
  // Este metodo imprime en consola que el pago fue realizado en efectivo
  procesarPago(cantidad:number) {
    console.log(`Pago de $${cantidad} realizado en efectivo`);
  }
}

export default PagoEfectivo;