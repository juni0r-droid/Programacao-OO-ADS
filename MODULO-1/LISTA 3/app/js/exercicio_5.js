// Exercício 5: Funcionário
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = 0;
    }
    Funcionario.prototype.definirSalario = function (valor) {
        if (valor > 1000) {
            this.salario = valor;
        }
        else {
            console.log("Salário deve ser maior que 1000.");
        }
    };
    Funcionario.prototype.getSalario = function () {
        return this.salario;
    };
    Funcionario.prototype.aumentarSalario = function (percentual) {
        if (percentual > 0) {
            this.salario += (this.salario * percentual) / 100;
        }
    };
    return Funcionario;
}());
// Teste
var func = new Funcionario("Ana", "Desenvolvedora");
func.definirSalario(1200);
console.log("Salário inicial:", func.getSalario());
func.aumentarSalario(10);
console.log("Após aumento:", func.getSalario());
