"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relatorio = void 0;
class Relatorio {
    constructor(livros, usuarios, emprestimos) {
        this.livros = livros;
        this.usuarios = usuarios;
        this.emprestimos = emprestimos;
    }
    gerarResumoGeral() {
        console.log(" \n--- RELATÓRIO GERAL DA BIBLIOTECA --- ");
        console.log(`Total de livros cadastrados: ${this.livros.length}`);
        console.log(`Usuários cadastrados: ${this.usuarios.length}`);
        console.log(`Empréstimos registrados: ${this.emprestimos.length}`);
        const emprestimosAtivos = this.emprestimos.filter(e => e.status === "Ativo").length;
        const emprestimosConcluidos = this.emprestimos.filter(e => e.status === "Concluído").length;
        console.log(`Empréstimos Ativos: ${emprestimosAtivos}`);
        console.log(`Empréstimos Concluídos: ${emprestimosConcluidos}`);
    }
    listarLivrosEmprestados() {
        console.log("\n LIVROS EMPRESTADOS:");
        this.emprestimos
            .filter(e => e.status === "Ativo")
            .forEach(e => console.log(`- ${e.livro.titulo} → ${e.usuario.nome}`));
    }
}
exports.Relatorio = Relatorio;
