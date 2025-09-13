//Modelagem e Implementação de uma Classe para um Animal
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Object.defineProperty(Animal.prototype, "especie", {
        //get e set para especie
        get: function () {
            return this._especie;
        },
        set: function (especie) {
            this._especie = especie;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "idade", {
        //get e set para idade
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            this._idade = idade;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animal.prototype, "peso", {
        //get e set para peso
        get: function () {
            return this._peso;
        },
        set: function (peso) {
            this._peso = peso;
        },
        enumerable: false,
        configurable: true
    });
    //método alimentar
    Animal.prototype.alimentar = function (quantidade) {
        this._peso += quantidade;
    };
    return Animal;
}());
//instanciando objeto animal
var animal1 = new Animal();
animal1.especie = "Elefante";
animal1.idade = 10;
animal1.peso = 400;
//primeira impressão
console.log("===Animal antes da alimentação===");
console.log("Espécie: ", animal1.especie);
console.log("Idade: ", animal1.idade);
console.log("Peso: ", animal1.peso, "Kg");
//modificação de idade
animal1.idade = 11;
//ativando método
animal1.alimentar(25); //engordou 25 Kg
//segunda impressão
console.log("\n===Animal depois da alimentação e do aniversário===");
console.log("Espécie: ", animal1.especie);
console.log("Idade: ", animal1.idade);
console.log("Peso: ", animal1.peso, "Kg");
