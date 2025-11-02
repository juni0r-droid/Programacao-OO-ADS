import { Usuario, Professor, AlunoGraduado, AlunoIntercambio } from "./Usuario";
import { Emprestimos } from "./Emprestimos";
import { Multa } from "./Multas";
import { Relatorio } from "./Relatorio";
import { Livro } from "./Livro";

// Novo Alunos:
let aluno1 = new AlunoGraduado("João", 1, 1);
// Novo livro:
let livro1 = new Livro("o iluminado", "Stephen King", 122, "Suma", "ISBN-10", 1);
// Novo Emprestimo:
let emprestimo1 = new Emprestimos(aluno1, livro1);
// Novo relatorio
let relatorio1 = new Relatorio([livro1], [aluno1], [emprestimo1]);
//empresta livro
livro1.emprestar()
//gerar relatorio
relatorio1.gerarResumoGeral();
relatorio1.listarLivrosEmprestados();
//devolver livro
emprestimo1.devolverLivro();

relatorio1.gerarResumoGeral();
//multa
let multa1 = new Multa(aluno1, livro1, "veio sem uma página", 18.00);
multa1.exibirMulta();

