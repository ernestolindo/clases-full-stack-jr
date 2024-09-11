// Programacion Orientada a Objetos
// Es una forma de programar intentando siempre describir o pensar las cosas como si fueran objetos
// Conceptos Principales de POO -> Clases y los Objetos
// Clases -> Molde para generar algo
// Objeto -> Lo que podemos crear en base a ese molde
//Declaracion de clase
var Auto = /** @class */ (function () {
    function Auto() {
    }
    // Metodos: Cosas que puede hacer una clase
    Auto.prototype.encender = function () {
        console.log('Brum');
    };
    Auto.prototype.apagar = function () {
        console.log('Chauchis');
    };
    return Auto;
}());
// Instanciar: crear un objeto a traves de una clase
var autito = new Auto();
console.log(autito);
// Asignar una propiedad al objeto
autito.modelo = 'Enzo';
console.log(autito);
