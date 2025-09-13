var Retangulo = /** @class */ (function () {
    function Retangulo(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    //método
    Retangulo.prototype.calcularArea = function () {
        return this.largura * this.altura;
    };
    return Retangulo;
}());
// instancia de objeto
var ret = new Retangulo(5, 10);
console.log("Área:", ret.calcularArea());
