var Veiculo = /** @class */ (function () {
    function Veiculo(marca, ano) {
        this._marca = marca;
        this._ano = ano;
    }
    Veiculo.prototype.exibirInfo = function () {
        console.log("Ve\u00EDculo: ".concat(this._marca, ", Ano: ").concat(this._ano));
    };
    return Veiculo;
}());
var v1 = new Veiculo("Toyota", 2020);
v1.exibirInfo();
