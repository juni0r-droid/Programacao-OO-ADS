type Investimento = { ativo: string; valor: number };

class Carteira {
    private saldo: number;
    private investimentos: Investimento[];

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
        this.investimentos = [];
    }

    get getSaldo(): number {
        return this.saldo;
    }

    get getInvestimentos(): Investimento[] {
        return this.investimentos;
    }

    adicionarInvestimento(ativo: string, valor: number): void {
        this.saldo -= valor;
        this.investimentos.push({ ativo, valor });
    }

    removerInvestimento(ativo: string, valor: number): boolean {
        for (let i = 0; i < this.investimentos.length; i++) {
            let inv = this.investimentos[i];
            if (inv.ativo === ativo && inv.valor === valor) {
                this.saldo += valor;
                this.investimentos.splice(i, 1); // remove pelo índice encontrado
                return true;
            }
        }
        return false;
    }
}

class Transacao {
    private carteira: Carteira;

    constructor(carteira: Carteira) {
        this.carteira = carteira;
    }

    comprar(ativo: string, valor: number): void {
        if (valor <= this.carteira.getSaldo) {
            this.carteira.adicionarInvestimento(ativo, valor);
            console.log(`Compra realizada: ${ativo} por R$${valor}`);
        } else {
            console.log("Saldo insuficiente!");
        }
    }

    vender(ativo: string, valor: number): void {
        let sucesso = this.carteira.removerInvestimento(ativo, valor);
        if (sucesso) {
            console.log(` Venda realizada: ${ativo} por R$${valor}`);
        } else {
            console.log(" Investimento não encontrado!");
        }
    }
}


let carteira1 = new Carteira(1000);
let transacao1 = new Transacao(carteira1);

console.log("Saldo inicial:", carteira1.getSaldo);

transacao1.comprar("PETR4", 500);
console.log("Saldo após compra:", carteira1.getSaldo);

transacao1.vender("PETR4", 500);
console.log("Saldo após venda:", carteira1.getSaldo);

transacao1.comprar("VALE3", 1200); // vai falhar, saldo insuficiente
