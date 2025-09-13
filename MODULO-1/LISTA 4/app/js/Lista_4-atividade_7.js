var Aluno = /** @class */ (function () {
    function Aluno(nome, nota) {
        this._nome = nome;
        this._nota = nota;
    }
    return Aluno;
}());
var Turma = /** @class */ (function () {
    function Turma() {
        this._alunos = [];
    }
    Turma.prototype.adicionarAluno = function (a) {
        this._alunos.push(a);
    };
    return Turma;
}());
var turma1 = new Turma();
turma1.adicionarAluno(new Aluno("Pedro", 8));
turma1.adicionarAluno(new Aluno("Ana", 9));
console.log(turma1._alunos);
