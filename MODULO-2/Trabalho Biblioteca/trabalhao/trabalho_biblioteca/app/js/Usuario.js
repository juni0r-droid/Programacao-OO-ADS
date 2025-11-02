"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = exports.AlunoIntercambio = exports.AlunoGraduado = exports.Usuario = void 0;
class Usuario {
    constructor(nome, id, limiteEmprestimos) {
        this.nome = nome;
        this.id = id;
        this.limiteEmprestimos = limiteEmprestimos;
    }
}
exports.Usuario = Usuario;
class AlunoGraduado extends Usuario {
    constructor(nome, id, ra) {
        super(nome, id, 3); // limite padrão de 3 livros
        this.ra = ra;
    }
}
exports.AlunoGraduado = AlunoGraduado;
class AlunoIntercambio extends Usuario {
    constructor(nome, id, ra) {
        super(nome, id, 2); // limite padrão de 2 livros
        this.ra = ra;
    }
}
exports.AlunoIntercambio = AlunoIntercambio;
class Professor extends Usuario {
    constructor(nome, id, departamento) {
        super(nome, id, 10); // limite padrão de 10 livros
        this.departamento = departamento;
    }
}
exports.Professor = Professor;
