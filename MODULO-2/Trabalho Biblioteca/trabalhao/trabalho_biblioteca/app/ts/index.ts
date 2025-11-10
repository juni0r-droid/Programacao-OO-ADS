// index.ts — exemplo de uso das classes de forma manual

import { Usuario, Professor, AlunoGraduado, AlunoIntercambio } from "./Usuario";
import { Emprestimos } from "./Emprestimos";
import { Multa } from "./Multas";
import { Relatorio } from "./Relatorio";
import { Livro } from "./Livro";

const aluno1 = new AlunoGraduado("João", 1, 1);
const livro1 = new Livro("O Iluminado", "Stephen King", 122, "Suma", "ISBN-10", 1);
const emprestimo1 = new Emprestimos(aluno1, livro1);
const relatorio1 = new Relatorio([livro1], [aluno1], [emprestimo1]);

livro1.emprestar();

relatorio1.gerarResumoGeral();
relatorio1.listarLivrosEmprestados();

emprestimo1.devolverLivro();

relatorio1.gerarResumoGeral();

const multa1 = new Multa(aluno1, livro1, "Veio sem uma página", 18.00);
multa1.exibirMulta();
