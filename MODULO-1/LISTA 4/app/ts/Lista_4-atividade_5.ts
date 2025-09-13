class ContaBancaria2 {
    private _saldo: number;
    private _titular: string;

    constructor(titular: string, saldo: number) {
        this._titular = titular;
        this._saldo = saldo;
    }

    get getSaldo(): number {
        return this._saldo;
    }

    set setSaldo(valor: number) {
        if (valor >= 0) {
            this._saldo = valor;
        } else {
            console.log("Saldo não pode ser negativo!");
        }
    }
}

let conta2 = new ContaBancaria2("José", 500);
conta2.setSaldo = -200;
console.log("Saldo atual:", conta2.getSaldo);
