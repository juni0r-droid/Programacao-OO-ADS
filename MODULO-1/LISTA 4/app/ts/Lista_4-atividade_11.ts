class Moto {
    placa: string;
    modelo: string;
    disponivel: boolean;

    constructor(placa: string, modelo: string) {
        this.placa = placa;
        this.modelo = modelo;
        this.disponivel = true;
    }

    alugar(): boolean {
        if (this.disponivel) {
            this.disponivel = false;
            return true;
        }
        return false;

    }

    devolver(): void {
        this.disponivel = true;
    }

}

class Entregador {
    nome: string;
    motoAlugada: Moto;

    constructor(nome: string){
        this.nome = nome;

    }

    alugarMoto(m: Moto): void {
        if(m.alugar()) {
            this.motoAlugada = m
            console.log(`${this.nome} alugou a moto ${m.placa}`);
        } else {
            console.log(`Moto ${m.placa} não está disponível`);
        }
    }
}

let moto1 = new Moto("FBIO-123", "Honda");
let entregador1 = new Entregador("Fábio");
entregador1.alugarMoto(moto1);