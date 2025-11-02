"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, capitulos, editora, isbn, qtdDisponivel) {
        this._titulo = titulo;
        this._autor = autor;
        this._capitulos = capitulos;
        this._editora = editora;
        this._isbn = isbn;
        this._qtdDisponivel = qtdDisponivel;
        this._status = qtdDisponivel > 0 ? "disponível" : "emprestado";
    }
    Object.defineProperty(Livro.prototype, "titulo", {
        get: function () { return this._titulo; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "autor", {
        get: function () { return this._autor; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "isbn", {
        get: function () { return this._isbn; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "qtdDisponivel", {
        get: function () { return this._qtdDisponivel; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "status", {
        get: function () { return this._status; },
        enumerable: false,
        configurable: true
    });
    Livro.prototype.emprestar = function () {
        if (this._qtdDisponivel > 0) {
            this._qtdDisponivel--;
            if (this._qtdDisponivel === 0)
                this._status = "emprestado";
            return true;
        }
        return false;
    };
    return Livro;
}());
exports.Livro = Livro;
