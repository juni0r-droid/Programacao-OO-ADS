// Exercício 4: Livro
class Livro {
    private titulo: string;
    private autor: string;
    private anoPublicacao: number;

    constructor(titulo: string, autor: string, anoPublicacao: number) {
        const anoAtual = new Date().getFullYear();
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao <= anoAtual ? anoPublicacao : anoAtual;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public getAnoPublicacao(): number {
        return this.anoPublicacao;
    }

    public exibirDetalhes(): void {
        console.log(`"${this.titulo}", por ${this.autor}, publicado em ${this.anoPublicacao}.`);
    }
}

// Teste
const livro1 = new Livro("O Programador Limpo", "Robert Martin", 2008);
livro1.exibirDetalhes();

const livro2 = new Livro("Livro do Futuro", "Autor X", 3000); // ano inválido
livro2.exibirDetalhes();