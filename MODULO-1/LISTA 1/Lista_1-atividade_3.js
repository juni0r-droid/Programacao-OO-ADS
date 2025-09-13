// Modelagem e Implementação de uma Classe para uma Conta Bancária
var Conta_Bancaria = /** @class */ (function () {
    function Conta_Bancaria() {
    }
    Object.defineProperty(Conta_Bancaria.prototype, "numero", {
        //get e set para numero
        get: function () {
            return this._numero;
        },
        set: function (numero) {
            this._numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta_Bancaria.prototype, "saldo", {
        //get e set para saldo
        get: function () {
            return this._saldo;
        },
        set: function (saldo) {
            this._saldo = saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta_Bancaria.prototype, "titular", {
        //get e set para titular
        get: function () {
            return this._titular;
        },
        set: function (titular) {
            this._titular = titular;
        },
        enumerable: false,
        configurable: true
    });
    Conta_Bancaria.prototype.depositar = function (valor) {
        this._saldo += valor;
    };
    return Conta_Bancaria;
}());
//intanciando objeto para conta bancaria
var conta1 = new Conta_Bancaria();
conta1.titular = "João";
conta1.numero = 2025;
conta1.saldo = 1000;
//primeira impressão
console.log("===conta bancária antes do depósito===");
console.log("Titular: ", conta1.titular);
console.log("Número: ", conta1.numero);
console.log("Saldo: ", "R$", conta1.saldo);
//Realizando depósito e modificações
conta1.titular = "Carlão";
conta1.depositar(100);
//objeto após o deposito
console.log("\n===conta bancária depois do depósito e modificações===");
console.log("Titular: ", conta1.titular);
console.log("Número: ", conta1.numero);
console.log("Saldo: ", "R$", conta1.saldo);
