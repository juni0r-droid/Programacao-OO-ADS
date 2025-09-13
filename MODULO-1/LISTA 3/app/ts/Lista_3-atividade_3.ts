// Exercício 3: Retângulo e Quadrado
class Retangulo {
    protected largura: number;
    protected altura: number;

    constructor(largura: number, altura: number) {
        this.largura = largura > 0 ? largura : 1;
        this.altura = altura > 0 ? altura : 1;
    }

    public calcularArea(): number {
        return this.largura * this.altura;
    }
}

class Quadrado extends Retangulo {
    constructor(lado: number) {
        super(lado, lado);
    }
}

// Teste
const ret = new Retangulo(10, 5);
console.log("Área Retângulo:", ret.calcularArea());

const quad = new Quadrado(6);
console.log("Área Quadrado:", quad.calcularArea());