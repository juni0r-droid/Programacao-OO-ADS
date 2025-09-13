var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(titular, saldo) {
        this._titular = titular;
        this._saldo = saldo;
    }
    Object.defineProperty(ContaBancaria.prototype, "getSaldo", {
        get: function () {
            return this._saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContaBancaria.prototype, "getTitular", {
        get: function () {
            return this._titular;
        },
        enumerable: false,
        configurable: true
    });
    return ContaBancaria;
}());
var conta1 = new ContaBancaria("Maria", 1000);
console.log(conta1.getTitular, "Saldo:", conta1.getSaldo);
