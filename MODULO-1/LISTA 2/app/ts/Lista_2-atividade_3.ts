class Livro {
    public titulo: string;
    public autor: string;
    public anoPublicacao: number;

    constructor(titulo: string, autor: string, anoPublicacao?: number) {
        this.titulo = titulo;
        this.autor = autor;

        if (anoPublicacao !== undefined) {
            this.anoPublicacao = anoPublicacao;
        } else {
            this.anoPublicacao = new Date().getFullYear();
        }
    }
     //metodo
    public detalhes(): string {
        return `${this.titulo}, escrito por ${this.autor}, publicado em ${this.anoPublicacao}`;
    }
}

// instancia de objetos
let livro1 = new Livro("Harry Poter e a Pedra Filosofal", "JK.Howling", 1997);
console.log(livro1.detalhes());

let livro2 = new Livro("Livro Atual", "Autor Famoso");
console.log(livro2.detalhes());
