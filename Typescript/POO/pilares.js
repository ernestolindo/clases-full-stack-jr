//4 Pilares POO 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
    Herencia
    Polimorfismo

    Encapsulamiento -> Limitar el acceso a algo a traves de MODIFICADORES DE ACCESO
    Abstraccion -> Nos da herramientas para interactuar con lo que este limitado de una clase
*/
/*
    Modificadores de acceso
    Public -> Todo el mundo puede acceder
    Private -> Solo ella misma va a tener acceso
    Protected -> Va a tener acceso la misma clase y sus hijos
*/
var Person = /** @class */ (function () {
    function Person(nameParam, ageParam, duiParam) {
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }
    Person.prototype.respirar = function () {
        console.log("Afff");
    };
    //Getters y Setters
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.setAge = function (ageParam) {
        this.age = ageParam;
    };
    return Person;
}());
var personita = new Person("Jairo Vega", 75, "0105080-3");
//personita.name = "Hector";
console.log(personita);
console.log(personita.getName());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(nameParam, ageParam, duiParam, expParam, techSkillsParam, softSkillsParam, gitUserParam, areaParam, projectsParam) {
        var _this = _super.call(this, nameParam, ageParam, duiParam) || this;
        _this.exp = expParam;
        _this.techSkills = techSkillsParam;
        _this.softSkills = softSkillsParam;
        _this.gitUser = gitUserParam;
        _this.area = areaParam;
        _this.projects = projectsParam;
        return _this;
    }
    Developer.prototype.getArea = function () {
        return this.area;
    };
    Developer.prototype.respirar = function () {
        console.log('Sniff sniff');
    };
    return Developer;
}(Person));
var developercito = new Developer('Ernesto Lindo', 20, '06663943-5', 2, ['JavaScript', 'PHP', 'CSS', 'HTML'], ['Comunicacion efectiva', 'Proactividad', 'Liderazgo'], 'ernestolindo', 'Backend Developer', ['APIs']);
developercito.getAge();
personita.respirar();
developercito.respirar();
