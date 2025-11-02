"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Multa = void 0;
class Multa {
    constructor(usuario, livro, motivo, valor) {
        this.usuario = usuario;
        this.livro = livro;
        this.motivo = motivo;
        this.valor = valor;
        this.data = new Date();
    }
    exibirMulta() {
        console.log(`\n Multa registrada para ${this.usuario.nome}:`);
        console.log(`Livro: ${this.livro.titulo}`);
        console.log(`Motivo: ${this.motivo}`);
        console.log(`Valor: R$ ${this.valor.toFixed(2)}`);
        console.log(`Data: ${this.data.toLocaleDateString()}`);
    }
}
exports.Multa = Multa;
