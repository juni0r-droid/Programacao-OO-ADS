import { Usuario } from "./Usuario";
import { Livro } from "./Livro";

export class Multa {
    usuario: Usuario;
    livro: Livro;
    valor: number;
    motivo: string;
    data: Date;

    constructor(usuario: Usuario, livro: Livro, motivo: string, valor: number) {
        this.usuario = usuario;
        this.livro = livro;
        this.motivo = motivo;
        this.valor = valor;
        this.data = new Date();
    }

    exibirMulta(): void {
        console.log(` Multa registrada para ${this.usuario.nome}:`);
        console.log(`Livro: ${this.livro.titulo}`);
        console.log(`Motivo: ${this.motivo}`);
        console.log(`Valor: R$ ${this.valor.toFixed(2)}`);
        console.log(`Data: ${this.data.toLocaleDateString()}`);
    }
}
