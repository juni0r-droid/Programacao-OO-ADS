class Aluno {
    _nome: string;
    _nota: number;

    constructor(nome: string, nota: number) {
        this._nome = nome;
        this._nota = nota;
    }
}

class Turma {
    _alunos: Aluno[] = [];

    adicionarAluno(a: Aluno): void {
        this._alunos.push(a);
    }
}

let turma1 = new Turma();
turma1.adicionarAluno(new Aluno("Pedro", 8));
turma1.adicionarAluno(new Aluno("Ana", 9));
console.log(turma1._alunos);
