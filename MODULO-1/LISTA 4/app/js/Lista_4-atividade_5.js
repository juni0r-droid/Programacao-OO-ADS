var ContaBancaria2 = /** @class */ (function () {
    function ContaBancaria2(titular, saldo) {
        this._titular = titular;
        this._saldo = saldo;
    }
    Object.defineProperty(ContaBancaria2.prototype, "getSaldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaBancaria2.prototype, "setSaldo", {
        set: function (valor) {
            if (valor >= 0) {
                this._saldo = valor;
            }
            else {
                console.log("Saldo não pode ser negativo!");
            }
        },
        enumerable: false,
        configurable: true
    });
    return ContaBancaria2;
}());
var conta2 = new ContaBancaria2("José", 500);
conta2.setSaldo = -200;
console.log("Saldo atual:", conta2.getSaldo);
