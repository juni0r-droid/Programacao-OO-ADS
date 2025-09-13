class Animal {
    public especie: string;

    constructor(especie: string) {
        this.especie = especie;
    }
}

class Cachorro extends Animal {
    public raca: string;

    constructor(especie: string, raca: string) {
        super(especie);
        this.raca = raca;
    }

    public latir(): string {
        return "Au au!";
    }
}

// instancia
let dog = new Cachorro("Canino", "Labrador");
console.log("espécie:", dog.especie, "\nraça:", dog.raca);
console.log(dog.latir());
