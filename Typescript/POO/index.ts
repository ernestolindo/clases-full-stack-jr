// Programacion Orientada a Objetos
// Es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos

// Conceptos Principales de POO -> Clases y los Objetos
// Clases -> Molde para generar algo
// Objeto -> Lo que podemos crear en base a ese molde

//Declaracion de clase

class Auto{
  //Caracteristicas generales -> Propiedades o atributos
  numChasis:number;
  motor:string;
  color:string;
  tipoCombustible:string;
  transmision:string;
  cantKilometraje:string;
  plazas:number;
  frenos:string;
  modelo:string;
  anioFab:number;

  // Constructor
  constructor(numChasisParam:number,motorParam:string,colorParam:string,tipoCompustibleParam:string, transmisionParam:string,plazasParam:number,frenosParam:string, modeloParam:string, añoFabParam:number){
    this.numChasis = numChasisParam;
    this.motor = motorParam;
    this.color = colorParam;
    this.tipoCombustible = tipoCompustibleParam;
    this.transmision = transmisionParam;
    this.plazas = plazasParam;
    this.frenos = frenosParam;
    this.modelo = modeloParam;
    this.anioFab = añoFabParam;
  }

  // Metodos: Cosas que puede hacer una clase
  encender():void{
    console.log('Brum');
  }

  apagar():void{
    console.log('Chauchis');
  }
}

// Instanciar: crear un objeto a traves de una clase

let autito:Auto = new Auto();

console.log(autito);

// Asignar una propiedad al objeto
autito.modelo = 'Enzo';
console.log(autito);

