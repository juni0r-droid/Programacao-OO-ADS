class Pessoa {
    public nome: string;
    public idade: number;

    constructor() {
        this.nome = "Anônimo";
        this.idade = 0;
    }
    //método apresentar
    public apresentar(): string{
        return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos`;
    }
}

//instanciando objeto de pessoa
let pessoa1 = new Pessoa();
console.log(pessoa1.apresentar())
