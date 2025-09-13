class Veiculo {
    public marca: string;
    public modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // assinaturas das sobrecargas
    public descrever(): string;
    public descrever(detalhado: boolean): string;

    // implementação única
    public descrever(detalhado?: boolean): string {
        if (detalhado === true) {
            return "Veículo: " + this.marca + " " + this.modelo + " (descrição detalhada)";
        } else {
            return "Veículo: " + this.marca + " " + this.modelo;
        }
    }
}

// instancia
let carro = new Veiculo("Toyota", "Corolla");
console.log(carro.descrever());       
console.log(carro.descrever(true));   
