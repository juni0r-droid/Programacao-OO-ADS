var Circulo = /** @class */ (function () {
    function Circulo(raio, cor) {
        if (cor === void 0) { cor = "preto"; }
        this.raio = raio;
        this.cor = cor;
    }
    //metodo
    Circulo.prototype.calcularCircunferencia = function () {
        return 2 * Math.PI * this.raio;
    };
    return Circulo;
}());
//instancia de objetos
var c1 = new Circulo(5);
console.log(c1.cor, c1.calcularCircunferencia());
var c2 = new Circulo(10, "vermelho");
console.log(c2.cor, c2.calcularCircunferencia());
