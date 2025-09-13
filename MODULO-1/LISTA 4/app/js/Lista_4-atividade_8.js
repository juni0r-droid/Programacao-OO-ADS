var Paciente = /** @class */ (function () {
    function Paciente(nome, idade) {
        this._nome = nome;
        this._idade = idade;
        this._sintomas = [];
    }
    Object.defineProperty(Paciente.prototype, "getSintomas", {
        get: function () {
            return this._sintomas;
        },
        enumerable: false,
        configurable: true
    });
    Paciente.prototype.adicionarSintoma = function (s) {
        if (typeof s === "string") {
            this._sintomas.push(s);
        }
    };
    return Paciente;
}());
var paciente1 = new Paciente("Clara", 30);
console.log("nome: ".concat(paciente1._nome, "  idade: ").concat(paciente1._idade));
paciente1.adicionarSintoma("Febre");
console.log(paciente1.getSintomas);
