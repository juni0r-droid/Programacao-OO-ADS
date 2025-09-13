class Circulo {
    public raio: number;
    public cor: string;

    constructor(raio: number, cor: string = "preto") {
        this.raio = raio;
        this.cor = cor;
    }

    //metodo
    public calcularCircunferencia(): number {
        return 2 * Math.PI * this.raio;
    }
}

//instancia de objetos
let c1 = new Circulo(5);
console.log(c1.cor, c1.calcularCircunferencia());

let c2 = new Circulo(10, "vermelho");
console.log(c2.cor, c2.calcularCircunferencia());