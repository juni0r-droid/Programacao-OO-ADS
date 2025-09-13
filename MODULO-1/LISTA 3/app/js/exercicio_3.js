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
// Exercício 3: Retângulo e Quadrado
var Retangulo = /** @class */ (function () {
    function Retangulo(largura, altura) {
        this.largura = largura > 0 ? largura : 1;
        this.altura = altura > 0 ? altura : 1;
    }
    Retangulo.prototype.calcularArea = function () {
        return this.largura * this.altura;
    };
    return Retangulo;
}());
var Quadrado = /** @class */ (function (_super) {
    __extends(Quadrado, _super);
    function Quadrado(lado) {
        return _super.call(this, lado, lado) || this;
    }
    return Quadrado;
}(Retangulo));
// Teste
var ret = new Retangulo(10, 5);
console.log("Área Retângulo:", ret.calcularArea());
var quad = new Quadrado(6);
console.log("Área Quadrado:", quad.calcularArea());
