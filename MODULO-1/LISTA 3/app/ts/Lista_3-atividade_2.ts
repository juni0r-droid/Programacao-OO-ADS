// Exercício 2: Conta Bancária
class ContaBancaria {
    private numeroConta: string;
    private saldo: number;

    constructor(numeroConta: string) {
        this.numeroConta = numeroConta;
        this.saldo = 0;
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        } else {
            console.log("Depósito inválido.");
        }
    }

    public sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("Saque inválido ou saldo insuficiente.");
        }
    }

    public getSaldo(): number {
        return this.saldo;
    }
}

// Teste
let conta1 = new ContaBancaria("12345");
conta1.depositar(500);
conta1.sacar(200);
console.log("Saldo atual:", conta1.getSaldo());