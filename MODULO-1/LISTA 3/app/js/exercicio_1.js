// Exercício 1: Classe Pessoa
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade > 0 ? idade : 0;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.setIdade = function (novaIdade) {
        if (novaIdade > 0) {
            this.idade = novaIdade;
        }
        else {
            console.log("Idade inválida.");
        }
    };
    return Pessoa;
}());
// Teste
var pessoa1 = new Pessoa("João", 17);
console.log(pessoa1.getNome(), pessoa1.getIdade());
pessoa1.setIdade(18);
console.log("Nova idade:", pessoa1.getIdade());
