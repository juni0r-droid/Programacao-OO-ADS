var Pessoa = /** @class */ (function () {
    function Pessoa() {
        this.nome = "Anônimo";
        this.idade = 0;
    }
    //método apresentar
    Pessoa.prototype.apresentar = function () {
        return "Ol\u00E1, meu nome \u00E9 ".concat(this.nome, " e tenho ").concat(this.idade, " anos");
    };
    return Pessoa;
}());
//instanciando objeto de pessoa
var pessoa1 = new Pessoa();
console.log(pessoa1.apresentar());
