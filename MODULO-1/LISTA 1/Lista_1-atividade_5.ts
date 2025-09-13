//Modelagem e Implementação de uma Classe para um Telefone

class Telefone {
    _marca: string;
    _modelo: string;
    _bateria: number;

    //get e set para marca
    get marca(): string {
        return this._marca;
    }
    set marca(marca: string) {
        this._marca = marca;
    }
    //get e set para modelo
    get modelo(): string {
        return this._modelo;
    }
    set modelo(modelo: string) {
        this._modelo = modelo;
    }
    //get e set para bateria
    get bateria(): number {
        return this._bateria;
    }
    set bateria(bateria: number) {
        this._bateria = bateria;
    }
    //definindo método carregar
    carregar(): void {
        this._bateria = 100;
    }
}

//instanciando objeto de Telefone
let celular = new Telefone();
celular._marca = "Xiaomi";
celular._modelo = "POCO C65";
celular._bateria = 25;

console.log("=== Antes de carregar ===");
console.log("Marca:", celular.marca);
console.log("Modelo:", celular.modelo);
console.log("Bateria:", celular.bateria + "%");

// Modificando o modelo e carregando o celular
celular.modelo = "POCO F4";
celular.carregar();

console.log("\n=== Depois de carregar ===");
console.log("Marca:", celular.marca);
console.log("Modelo:", celular.modelo);
console.log("Bateria:", celular.bateria + "%");