//Modelagem e Implementação de uma Classe para um Animal

class Animal {

    _especie: string;
    _idade: number;
    _peso: number;

    //get e set para especie
    get especie(): string {
        return this._especie;
    }
    set especie(especie: string) {
        this._especie = especie;
    }
    //get e set para idade
    get idade(): number {
        return this._idade;
    }
    set idade(idade: number) {
        this._idade = idade;
    }
    //get e set para peso
    get peso(): number {
        return this._peso
    }
    set peso(peso: number) {
        this._peso = peso;
    }
    //método alimentar
    alimentar(quantidade: number): void{
        this._peso += quantidade;
    }
}
//instanciando objeto animal
let animal1 = new Animal();
animal1.especie = "Elefante";
animal1.idade = 10;
animal1.peso = 400;
//primeira impressão
console.log("===Animal antes da alimentação===");
console.log("Espécie: ", animal1.especie);
console.log("Idade: ", animal1.idade);
console.log("Peso: ", animal1.peso,"Kg");

//modificação de idade
animal1.idade = 11;

//ativando método
animal1.alimentar(25); //engordou 25 Kg

//segunda impressão
console.log("\n===Animal depois da alimentação e do aniversário===");
console.log("Espécie: ", animal1.especie);
console.log("Idade: ", animal1.idade);
console.log("Peso: ", animal1.peso,"Kg");
