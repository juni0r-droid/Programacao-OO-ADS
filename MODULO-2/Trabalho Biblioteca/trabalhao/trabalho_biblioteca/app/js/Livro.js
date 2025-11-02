"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor, capitulos, editora, isbn, qtdDisponivel) {
        this._titulo = titulo;
        this._autor = autor;
        this._capitulos = capitulos;
        this._editora = editora;
        this._isbn = isbn;
        this._qtdDisponivel = qtdDisponivel;
        this._status = qtdDisponivel > 0 ? "disponível" : "emprestado";
    }
    get titulo() { return this._titulo; }
    get autor() { return this._autor; }
    get isbn() { return this._isbn; }
    get qtdDisponivel() { return this._qtdDisponivel; }
    get status() { return this._status; }
    emprestar() {
        if (this._qtdDisponivel > 0) {
            this._qtdDisponivel--;
            if (this._qtdDisponivel === 0)
                this._status = "emprestado";
            return true;
        }
        return false;
    }
}
exports.Livro = Livro;
