let variable; //Variable en JS

// Typescript: Declaracion de variable + tipo de dato
let cadenaTexto:string = 'Zat';
let numero:number = 1.5;
let booleano:boolean = false;

// Declaracion de array
let arraycito:string[] = ['holi', 'la vida es bella', 'hehe'];

let arrayNumero:number[] = [11, 12, 13, 14];

// Nunca usar esto
let arrayMalo:any[] = [11, 'hi', false];

// Array numerico o string
let arrayNumString:number[]|string[] = ['Luis', '12']; //O una opcion u otra
let arrayNumYString: (number|string)[] = [12, 341, 'Luis', 'Garcia'];

// Declaracion de tuplas: array con indices limitados y tipo de dato declarado previamente
let datosUsuario:[string,number];
datosUsuario = ['Jairo', 75];

// Funciones en TS
function tipoVoid():void{ // Hay que aclarar cuando la funcion no retorna nada
  console.log("Chauchis"); 
}

function sumar():number{
  return 2 + 2;
}

function sumarOContatenar():string|number {
  return 3 + 5;
}

// Tipescript es un lenguaje de tipado fuerte

function saludar(nombre:string):string{
  // Template string (plantillas literales)
  return `Hola, como estas ${nombre}`;
}

console.log(saludar('Ernesto'));
