// Exercício 2: Conta Bancária
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(numeroConta) {
        this.numeroConta = numeroConta;
        this.saldo = 0;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
        else {
            console.log("Depósito inválido.");
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Saque inválido ou saldo insuficiente.");
        }
    };
    ContaBancaria.prototype.getSaldo = function () {
        return this.saldo;
    };
    return ContaBancaria;
}());
// Teste
var conta1 = new ContaBancaria("12345");
conta1.depositar(500);
conta1.sacar(200);
console.log("Saldo atual:", conta1.getSaldo());
