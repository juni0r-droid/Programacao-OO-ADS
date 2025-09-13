var Livro = /** @class */ (function () {
    function Livro(titulo, autor, anoPublicacao) {
        this.titulo = titulo;
        this.autor = autor;
        if (anoPublicacao !== undefined) {
            this.anoPublicacao = anoPublicacao;
        }
        else {
            this.anoPublicacao = new Date().getFullYear();
        }
    }
    //metodo
    Livro.prototype.detalhes = function () {
        return "".concat(this.titulo, ", escrito por ").concat(this.autor, ", publicado em ").concat(this.anoPublicacao);
    };
    return Livro;
}());
// instancia de objetos
var livro1 = new Livro("Harry Poter e a Pedra Filosofal", "JK.Howling", 1997);
console.log(livro1.detalhes());
var livro2 = new Livro("Livro Atual", "Autor Famoso");
console.log(livro2.detalhes());
