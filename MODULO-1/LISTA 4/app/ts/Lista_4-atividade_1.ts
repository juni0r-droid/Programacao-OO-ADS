class Pessoa {
    _nome: string;
    _idade: number;

    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }

    apresentar(): string {
        return `Olá, meu nome é ${this._nome} e tenho ${this._idade} anos.`;
    }
}

let p1 = new Pessoa("João", 20);
console.log(p1.apresentar());