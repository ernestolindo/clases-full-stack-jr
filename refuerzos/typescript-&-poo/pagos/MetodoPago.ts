// Definimos una interfaz que sera implementada por diferentes tipos de metodos de pago
interface MetodoPago {
  procesarPago(cantidad:number): void;
}

export default MetodoPago;  