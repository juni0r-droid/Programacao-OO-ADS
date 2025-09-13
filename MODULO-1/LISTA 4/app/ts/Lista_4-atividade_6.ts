class Livro {
    _titulo: string;
    _autor: string;
    _disponivel: boolean;

    constructor(titulo: string, autor: string) {
        this._titulo = titulo;
        this._autor = autor;
        this._disponivel = true;
    }

    emprestar(): void {
        if (this._disponivel) {
            this._disponivel = false;
            console.log(`${this._titulo} emprestado com sucesso!`);
        } else {
            console.log(`${this._titulo} não está disponível.`);
        }
    }

    devolver(): void {
        this._disponivel = true;
        console.log(`${this._titulo} devolvido com sucesso!`);
    }
}

let livro1 = new Livro("1984", "George Orwell");
livro1.emprestar();
livro1.devolver();
