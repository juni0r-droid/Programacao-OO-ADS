class Produto {
    _nome: string;
    _preco: number;

    constructor(nome: string, preco: number) {
        this._nome = nome;
        this._preco = preco;
    }

    calcularDesconto(porcentagem: number): number {
        return this._preco - (this._preco * porcentagem / 100);
    }
}

let prod1 = new Produto("Arroz", 20);
console.log("Preço com 10% de desconto:", prod1.calcularDesconto(10));
