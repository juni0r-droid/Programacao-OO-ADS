class ContaBancaria {
    private _saldo: number;
    private _titular: string;

    constructor(titular: string, saldo: number) {
        this._titular = titular;
        this._saldo = saldo;
    }

    get getSaldo(): number {
        return this._saldo;
    }

    get getTitular(): string {
        return this._titular;
    }
}

let conta1 = new ContaBancaria("Maria", 1000);
console.log(conta1.getTitular, "Saldo:", conta1.getSaldo);
