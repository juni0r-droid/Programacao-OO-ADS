// Exercício 1: Classe Pessoa
class Pessoa {
    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade > 0 ? idade : 0;
    }

    public getNome(): string {
        return this.nome;
    }

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(novaIdade: number): void {
        if (novaIdade > 0) {
            this.idade = novaIdade;
        } else {
            console.log("Idade inválida.");
        }
    }
}

// Teste
let pessoa1 = new Pessoa("João", 17);
console.log(pessoa1.getNome(), pessoa1.getIdade());
pessoa1.setIdade(18);
console.log("Nova idade:", pessoa1.getIdade());