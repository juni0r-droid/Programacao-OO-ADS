"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Usuario_1 = require("./Usuario");
const Emprestimos_1 = require("./Emprestimos");
const Multas_1 = require("./Multas");
const Relatorio_1 = require("./Relatorio");
const Livro_1 = require("./Livro");
// Novo Alunos:
let aluno1 = new Usuario_1.AlunoGraduado("João", 1, 1);
// Novo livro:
let livro1 = new Livro_1.Livro("o iluminado", "Stephen King", 122, "Suma", "ISBN-10", 1);
// Novo Emprestimo:
let emprestimo1 = new Emprestimos_1.Emprestimos(aluno1, livro1);
// Novo relatorio
let relatorio1 = new Relatorio_1.Relatorio([livro1], [aluno1], [emprestimo1]);
//empresta livro
livro1.emprestar();
//gerar relatorio
relatorio1.gerarResumoGeral();
relatorio1.listarLivrosEmprestados();
//devolver livro
emprestimo1.devolverLivro();
relatorio1.gerarResumoGeral();
//multa
let multa1 = new Multas_1.Multa(aluno1, livro1, "veio sem uma página", 18.00);
multa1.exibirMulta();
