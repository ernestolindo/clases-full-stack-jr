var variable; //Variable en JS
// Typescript: Declaracion de variable + tipo de dato
var cadenaTexto = 'Zat';
var numero = 1.5;
var booleano = false;
// Declaracion de array
var arraycito = ['holi', 'la vida es bella', 'hehe'];
var arrayNumero = [11, 12, 13, 14];
// Nunca usar esto
var arrayMalo = [11, 'hi', false];
// Array numerico o string
var arrayNumString = ['Luis', '12']; //O una opcion u otra
var arrayNumYString = [12, 341, 'Luis', 'Garcia'];
// Declaracion de tuplas: array con indices limitados y tipo de dato declarado previamente
var datosUsuario;
datosUsuario = ['Jairo', 75];
// Funciones en TS
function tipoVoid() {
    console.log("Chauchis");
}
function sumar() {
    return 2 + 2;
}
function sumarOContatenar() {
    return 3 + 5;
}
// Tipescript es un lenguaje de tipado fuerte
function saludar(nombre) {
    // Template string (plantillas literales)
    return "Hola, como estas ".concat(nombre);
}
console.log(saludar('Ernesto'));
