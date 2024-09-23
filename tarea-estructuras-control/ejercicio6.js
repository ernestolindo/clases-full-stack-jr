function getDescuentoViaje(origen, destino) {
  let descuento;
  if (origen === "Ciudad de Palma" && destino === "La Costa del Sol")
    descuento = 0.05;
  else if (origen === "Ciudad de Palma" && destino === "Panchimalco")
    descuento = 0.1;
  else if (origen === "Ciudad de Palma" && destino === "Puerto El Triunfo")
    descuento = 0.15;
  else return "Lo sentimos, no se ha encontrado un descuento aplicable";

  return `El viaje desde Ciudad de Palma hasta ${destino} tiene un descuento del ${
    descuento * 100
  }%.`;
}

console.log(getDescuentoViaje("Santa Tecla", "Puerto El Triunfo"));
