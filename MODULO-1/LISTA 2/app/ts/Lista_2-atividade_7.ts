class Contador {
    private valor: number;

    constructor() {
        this.valor = 0;
    }

    public incrementar(): void {
        this.valor = this.valor + 1;
    }

    public obterValor(): number {
        return this.valor;
    }
}

// instancia
let cont = new Contador();
cont.incrementar();
console.log(cont.obterValor());
cont.incrementar();
console.log(cont.obterValor());
cont.incrementar();
console.log(cont.obterValor());
