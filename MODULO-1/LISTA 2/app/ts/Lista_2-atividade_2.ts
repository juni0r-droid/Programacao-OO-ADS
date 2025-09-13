class Retangulo {
    public largura: number;
    public altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura;
        this.altura = altura;
    }
    //método
    public calcularArea(): number {
        return this.largura * this.altura;
    }
}

// instancia de objeto
let ret = new Retangulo(5, 10);
console.log("Área:", ret.calcularArea());
