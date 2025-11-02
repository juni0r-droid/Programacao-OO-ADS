"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emprestimos = void 0;
const Usuario_1 = require("./Usuario");
class Emprestimos {
    constructor(usuario, livro) {
        // Verifica se há livros disponíveis
        if (livro.qtdDisponivel <= 0) {
            throw new Error("Livro indisponível para empréstimo.");
        }
        // Verifica se o usuário ainda pode pegar mais livros
        if (usuario.limiteEmprestimos <= 0) {
            throw new Error(`${usuario.nome} atingiu o limite de empréstimos.`);
        }
        this.usuario = usuario;
        this.livro = livro;
        this.dataEmprestimo = new Date();
        this.status = "Ativo";
        // Calcula data de devolução conforme o tipo do usuário
        let diasEmprestimo = 7; // padrão
        if (usuario instanceof Usuario_1.AlunoGraduado)
            diasEmprestimo = 15;
        if (usuario instanceof Usuario_1.Professor)
            diasEmprestimo = 30;
        if (usuario instanceof Usuario_1.AlunoIntercambio)
            diasEmprestimo = 10;
        const dataPrevista = new Date();
        dataPrevista.setDate(dataPrevista.getDate() + diasEmprestimo);
        this.dataDevolucaoPrevista = dataPrevista;
        // Atualiza quantidade disponível e limite do usuário
        livro._qtdDisponivel -= 1;
        usuario.limiteEmprestimos -= 1;
    }
    devolverLivro() {
        this.status = "Concluído";
        this.livro._qtdDisponivel += 1;
        this.usuario.limiteEmprestimos += 1;
        if (this.livro._qtdDisponivel > 0) {
            this.livro._status = "disponível";
        }
    }
    verificarAtraso() {
        const hoje = new Date();
        return hoje > this.dataDevolucaoPrevista;
    }
}
exports.Emprestimos = Emprestimos;
