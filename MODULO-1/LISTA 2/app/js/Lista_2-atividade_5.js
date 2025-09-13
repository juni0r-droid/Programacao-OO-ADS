var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.somar = function (a, b) {
        return a + b;
    };
    return Calculadora;
}());
//instancia
var calc = new Calculadora();
console.log(calc.somar(2, 3));
console.log(calc.somar("Olá", " Mundo"));
