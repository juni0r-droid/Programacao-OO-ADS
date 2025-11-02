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

livro1.emprestar()