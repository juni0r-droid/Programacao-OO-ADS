"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multa = void 0;
var Multa = /** @class */ (function () {
    function Multa(usuario, livro, motivo, valor) {
        this.usuario = usuario;
        this.livro = livro;
        this.motivo = motivo;
        this.valor = valor;
        this.data = new Date();
    }
    Multa.prototype.exibirMulta = function () {
        console.log(" Multa registrada para ".concat(this.usuario.nome, ":"));
        console.log("Livro: ".concat(this.livro.titulo));
        console.log("Motivo: ".concat(this.motivo));
        console.log("Valor: R$ ".concat(this.valor.toFixed(2)));
        console.log("Data: ".concat(this.data.toLocaleDateString()));
    };
    return Multa;
}());
exports.Multa = Multa;
