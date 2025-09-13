var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this._nome, " e tenho ").concat(this._idade, " anos.");
    };
    return Pessoa;
}());
var p1 = new Pessoa("João", 20);
console.log(p1.apresentar());
