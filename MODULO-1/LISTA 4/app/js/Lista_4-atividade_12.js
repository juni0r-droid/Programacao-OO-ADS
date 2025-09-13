var Animal = /** @class */ (function () {
    function Animal(nome, especie, idade) {
        this._idade = 0;
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }
    Object.defineProperty(Animal.prototype, "idade", {
        get: function () {
            return this._idade;
        },
        set: function (idade) {
            if (idade > 0) {
                this._idade = idade;
            }
            else {
                console.log("\nanimal muito novo ou a idade foi inserida incorretamente!");
                this._idade = 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var Consulta = /** @class */ (function () {
    function Consulta(data, animal, diagnostico) {
        this.data = data;
        this.animal = animal;
        this.diagnostico = diagnostico;
    }
    Consulta.prototype.exibir = function () {
        console.log("".concat(this.animal.nome, " (").concat(this.animal.especie, ") - ").concat(this.data, " - ").concat(this.diagnostico));
    };
    return Consulta;
}());
var cao = new Animal("Roberto", "Cachorro", 5);
var consulta1 = new Consulta("18/09/2026", cao, "pata quebrada");
consulta1.exibir();
console.log("idade: ".concat(cao.idade));
var cao2 = new Animal("Alberto", "Cachorro", 0);
var consulta2 = new Consulta("24/04/2026", cao2, "doença");
consulta2.exibir();
console.log("idade: ".concat(cao2.idade));
