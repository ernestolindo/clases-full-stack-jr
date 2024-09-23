function getDescuentoCarro(carro) {
  let descuento;
  switch (carro) {
    case "FORD FIESTA":
      descuento = 0.05;
      break;
    case "FORD FOCUS":
      descuento = 0.1;
      break;
    case "FORD ESCAPE":
      descuento = 0.2;
      break;
  }

  const el = document.querySelector("p");
  return (el.innerHTML = `Usted ha seleccionado un ${carro}, el cual tiene un descuento de ${
    descuento * 100
  }%.`);
}
