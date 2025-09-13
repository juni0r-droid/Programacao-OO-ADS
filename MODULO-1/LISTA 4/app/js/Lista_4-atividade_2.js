var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this._nome = nome;
        this._preco = preco;
    }
    Produto.prototype.calcularDesconto = function (porcentagem) {
        return this._preco - (this._preco * porcentagem / 100);
    };
    return Produto;
}());
var prod1 = new Produto("Arroz", 20);
console.log("Preço com 10% de desconto:", prod1.calcularDesconto(10));
