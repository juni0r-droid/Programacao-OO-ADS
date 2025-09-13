class Animal {
    nome: string;
    especie: string;
    private _idade: number = 0; 

    constructor(nome: string, especie: string, idade: number) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade; 
    }
    get idade(): number {
        return this._idade;
    }
    set idade(idade: number) {
        if (idade > 0) {
            this._idade = idade;
        } else {
            console.log("\nanimal muito novo ou a idade foi inserida incorretamente!");
            this._idade = 0;
        }
    }

    
}

class Consulta {
    data: string;
    animal: Animal;
    private diagnostico: string;

    constructor(data: string, animal: Animal, diagnostico: string) {
        this.data = data;
        this.animal = animal;
        this.diagnostico = diagnostico;
    }

    exibir(): void {
        console.log(`${this.animal.nome} (${this.animal.especie}) - ${this.data} - ${this.diagnostico}`);
    }
}


let cao = new Animal("Roberto", "Cachorro", 5);
let consulta1 = new Consulta("18/09/2026", cao, "pata quebrada");
consulta1.exibir();
console.log(`idade: ${cao.idade}`);

let cao2 = new Animal("Alberto", "Cachorro", 0);
let consulta2 = new Consulta("24/04/2026", cao2, "doença");
consulta2.exibir();
console.log(`idade: ${cao2.idade}`);
