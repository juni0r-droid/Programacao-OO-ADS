//Modelagem e Implementação de uma Classe para um Livro

class Livro {
    _titulo: string;
    _autor: string;
    _paginas: number;
    _emprestado: string = "não";

    // Get e Set para título
    get titulo(): string {
        return this._titulo;
    }
    set titulo(valor: string) {
        this._titulo = valor;
    }

    // Get e Set para autor
    get autor(): string {
        return this._autor;
    }
    set autor(valor: string) {
        this._autor = valor;
    }

    // Get e Set para número de páginas
    get paginas(): number {
        return this._paginas;
    }
    set paginas(valor: number) {
        this._paginas = valor;
    }

    // Get e Set para emprestado
    get emprestado(): string {
        return this._emprestado;
    }
    set emprestado(valor: string) {
        this._emprestado = valor;
    }

    // Método de empréstimo
    emprestar(): void {
        this._emprestado = "sim";
    }

    // Método de devolução
    devolver(): void {
        this._emprestado = "não";
    }
}

// instanciando objetos de Livro
let livro1 = new Livro();
livro1.titulo = "Dom Casmurro";
livro1.autor = "Machado de Assis";
livro1.paginas = 256;

let livro2 = new Livro();
livro2.titulo = "1984";
livro2.autor = "George Orwell";
livro2.paginas = 328;

// Modificar o título do livro1
livro1.titulo = "Memórias Póstumas de Brás Cubas";

// Ativar o empréstimo no livro2
livro2.emprestar();

// Imprimir estados
console.log("=== Livro 1 ===");
console.log("Título:", livro1.titulo);
console.log("Autor:", livro1.autor);
console.log("Páginas:", livro1.paginas);
console.log("Emprestado:", livro1.emprestado);

console.log("\n=== Livro 2 ===");
console.log("Título:", livro2.titulo);
console.log("Autor:", livro2.autor);
console.log("Páginas:", livro2.paginas);
console.log("Emprestado:", livro2.emprestado);
