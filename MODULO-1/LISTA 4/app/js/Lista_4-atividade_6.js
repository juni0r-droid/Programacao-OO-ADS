var Livro = /** @class */ (function () {
    function Livro(titulo, autor) {
        this._titulo = titulo;
        this._autor = autor;
        this._disponivel = true;
    }
    Livro.prototype.emprestar = function () {
        if (this._disponivel) {
            this._disponivel = false;
            console.log("".concat(this._titulo, " emprestado com sucesso!"));
        }
        else {
            console.log("".concat(this._titulo, " n\u00E3o est\u00E1 dispon\u00EDvel."));
        }
    };
    Livro.prototype.devolver = function () {
        this._disponivel = true;
        console.log("".concat(this._titulo, " devolvido com sucesso!"));
    };
    return Livro;
}());
var livro1 = new Livro("1984", "George Orwell");
livro1.emprestar();
livro1.devolver();
