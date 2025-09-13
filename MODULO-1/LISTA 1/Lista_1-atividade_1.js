//Modelagem e Implementação de uma Classe para um Aluno
var Aluno = /** @class */ (function () {
    function Aluno() {
    }
    Object.defineProperty(Aluno.prototype, "nome", {
        //get e set para nome
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aluno.prototype, "matricula", {
        //get e set para matricula
        get: function () {
            return this._matricula;
        },
        set: function (matricula) {
            this._matricula = matricula;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aluno.prototype, "notaMedia", {
        //get e set para notaMedia
        get: function () {
            return this._notaMedia;
        },
        set: function (notaMedia) {
            this._notaMedia = notaMedia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Aluno.prototype, "diciplinas", {
        //get e set para diciplinas
        get: function () {
            return this._diciplinas;
        },
        set: function (diciplinas) {
            this._diciplinas = diciplinas;
        },
        enumerable: false,
        configurable: true
    });
    //método
    Aluno.prototype.transferencia = function (tranf) {
        this._matricula = tranf;
    };
    return Aluno;
}());
// instanciando um objeto de Aluno
var aluno1 = new Aluno();
aluno1.nome = "Joao";
aluno1.matricula = 1405;
aluno1.notaMedia = 9.0;
aluno1.diciplinas = "Historia";
console.log("======Aluno 1 (antes da modificação)======");
console.log("Nome do aluno: ", aluno1.nome);
console.log("Matrícula: ", aluno1.matricula);
console.log("Nota media: ", aluno1.notaMedia);
console.log("Diciplina: ", aluno1.diciplinas);
//modificando
aluno1.transferencia(2025);
aluno1._notaMedia = 10;
console.log("======Aluno 1 (depois da modificação)======");
console.log("Nome do aluno: ", aluno1.nome);
console.log("Matrícula: ", aluno1.matricula);
console.log("Nota media: ", aluno1.notaMedia);
console.log("Diciplina: ", aluno1.diciplinas);
