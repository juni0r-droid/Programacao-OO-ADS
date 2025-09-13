// Exercício 4: Livro
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        var anoAtual = new Date().getFullYear();
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao <= anoAtual ? anoPublicacao : anoAtual;
    }
    Livro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Livro.prototype.getAutor = function () {
        return this.autor;
    };
    Livro.prototype.getAnoPublicacao = function () {
        return this.anoPublicacao;
    };
    Livro.prototype.exibirDetalhes = function () {
        console.log("\"".concat(this.titulo, "\", por ").concat(this.autor, ", publicado em ").concat(this.anoPublicacao, "."));
    };
    return Livro;
}());
// Teste
var livro1 = new Livro("O Programador Limpo", "Robert Martin", 2008);
livro1.exibirDetalhes();
var livro2 = new Livro("Livro do Futuro", "Autor X", 3000); // ano inválido
livro2.exibirDetalhes();
