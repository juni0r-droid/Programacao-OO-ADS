class Pedido {
    itens: string[];
    total: number;

    constructor(itens: string[], total: number) {
        this.itens = itens;
        this.total = total;
    }

    calcularTotal(): number {
        return this.total;
    }
}

class Cliente {
    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }

    fazerPedido(p: Pedido): void {
        console.log(`${this.nome} fez um pedido de R$${p.calcularTotal()}`);
    }
}

const pedido1 = new Pedido(["camiseta", "calça"], 200);
const cliente1 = new Cliente("João", "joao@email.com");
cliente1.fazerPedido(pedido1);
