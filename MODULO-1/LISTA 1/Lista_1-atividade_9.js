//Modelagem e Implementação de uma Classe para um Produto
var Produto = /** @class */ (function () {
    function Produto() {
    }
    Object.defineProperty(Produto.prototype, "nome", {
        //get e set para nome
        get: function () {
            return this._nome;
        },
        set: function (valor) {
            this._nome = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "preco", {
        //get e set para preço
        get: function () {
            return this._preco;
        },
        set: function (valor) {
            this._preco = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Produto.prototype, "estoque", {
        //get e set para estoque
        get: function () {
            return this._estoque;
        },
        set: function (valor) {
            this._estoque = valor;
        },
        enumerable: false,
        configurable: true
    });
    // Método vender
    Produto.prototype.vender = function (qtd) {
        if (qtd <= this._estoque)
            this._estoque -= qtd;
        else
            console.log("Estoque insuficiente.");
    };
    return Produto;
}());
//instanciando objetos de Produto
var produto1 = new Produto();
produto1.nome = "Notebook";
produto1.preco = 3500;
produto1.estoque = 10;
var produto2 = new Produto();
produto2.nome = "Mouse Gamer";
produto2.preco = 150;
produto2.estoque = 20;
console.log("==antes da venda==");
console.log("=== Produto 1 ===\nNome: ", produto1.nome, "\nPreço: R$" + produto1.preco, "\nEstoque: ", produto1.estoque);
console.log("\n=== Produto 2 ===\nNome: ", produto2.nome, "\nPreço: R$" + produto2.preco, "\nEstoque: ", produto2.estoque);
//Modificando preço e usando Método
produto1.preco = 3000;
produto2.vender(5);
console.log("\n==depois da venda==");
console.log("=== Produto 1 ===\nNome: ", produto1.nome, "\nPreço: R$" + produto1.preco, "\nEstoque: ", produto1.estoque);
console.log("\n=== Produto 2 ===\nNome: ", produto2.nome, "\nPreço: R$" + produto2.preco, "\nEstoque: ", produto2.estoque);
