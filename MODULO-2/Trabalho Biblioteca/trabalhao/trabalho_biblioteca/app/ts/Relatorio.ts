import { Livro } from "./Livro";
import { Usuario } from "./Usuario";
import { Emprestimos } from "./Emprestimos";

export class Relatorio {
    livros: Livro[];
    usuarios: Usuario[];
    emprestimos: Emprestimos[];

    constructor(livros: Livro[], usuarios: Usuario[], emprestimos: Emprestimos[]) {
        this.livros = livros;
        this.usuarios = usuarios;
        this.emprestimos = emprestimos;
    }

    gerarResumoGeral(): void {
        console.log(" --- RELATÓRIO GERAL DA BIBLIOTECA --- ");
        console.log(`Total de livros cadastrados: ${this.livros.length}`);
        console.log(`Usuários cadastrados: ${this.usuarios.length}`);
        console.log(`Empréstimos registrados: ${this.emprestimos.length}`);

        const emprestimosAtivos = this.emprestimos.filter(e => e.status === "Ativo").length;
        const emprestimosConcluidos = this.emprestimos.filter(e => e.status === "Concluído").length;

        console.log(`Empréstimos Ativos: ${emprestimosAtivos}`);
        console.log(`Empréstimos Concluídos: ${emprestimosConcluidos}`);
    }

    listarLivrosEmprestados(): void {
        console.log("\n LIVROS EMPRESTADOS:");
        this.emprestimos
            .filter(e => e.status === "Ativo")
            .forEach(e => console.log(`- ${e.livro.titulo} → ${e.usuario.nome}`));
    }
}
