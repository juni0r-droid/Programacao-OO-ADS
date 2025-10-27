export class Usuario {
    public nome: string;
    public id: number;
    public limiteEmprestimos: number;

    constructor(nome: string, id: number, limiteEmprestimos: number) {
        this.nome = nome;
        this.id = id;
        this.limiteEmprestimos = limiteEmprestimos;
    }
}

export class AlunoGraduado extends Usuario {
    public ra: number;

    constructor(nome: string, id: number, ra: number) {
        super(nome, id, 3); // limite padrão de 3 livros
        this.ra = ra;
    }
}

export class AlunoIntercambio extends Usuario{
    public ra: number;

    constructor(nome: string, id: number, ra: number) {
        super(nome, id, 2); // limite padrão de 2 livros
        this.ra = ra;
    }
}

export class Professor extends Usuario {
    public departamento: string;

    constructor(nome: string, id: number, departamento: string) {
        super(nome, id, 10); // limite padrão de 10 livros
        this.departamento = departamento;
    }
}
