class Veiculo {
    _marca: string;
    _ano: number;

    constructor(marca: string, ano: number) {
        this._marca = marca;
        this._ano = ano;
    }

    exibirInfo(): void {
        console.log(`Veículo: ${this._marca}, Ano: ${this._ano}`);
    }
}

let v1 = new Veiculo("Toyota", 2020);
v1.exibirInfo();
