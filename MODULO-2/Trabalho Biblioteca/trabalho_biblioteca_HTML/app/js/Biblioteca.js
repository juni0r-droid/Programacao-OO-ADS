"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Usuario_1 = require("./Usuario");
var Emprestimos_1 = require("./Emprestimos");
var Multas_1 = require("./Multas");
var Relatorio_1 = require("./Relatorio");
var Livro_1 = require("./Livro");
// Novo Alunos:
var aluno1 = new Usuario_1.AlunoGraduado("João", 1, 1);
// Novo livro:
var livro1 = new Livro_1.Livro("O Iluminado", "Stephen King", 39, "Suma", "ISBN-13. 978-8581050485", 5);
var livro2 = new Livro_1.Livro("O Hobbit", "J.R.R. Tolkien", 19, "HarperCollins Brasil", "ISBN-10. 8578277104", 4);
// Novo Emprestimo:
var emprestimo1 = new Emprestimos_1.Emprestimos(aluno1, livro1);
// Novo relatorio
var relatorio1 = new Relatorio_1.Relatorio([livro1], [aluno1], [emprestimo1]);
//empresta livro
livro1.emprestar();
//gerar relatorio
relatorio1.gerarResumoGeral();
relatorio1.listarLivrosEmprestados();
//devolver livro
emprestimo1.devolverLivro();
relatorio1.gerarResumoGeral();
//multa
var multa1 = new Multas_1.Multa(aluno1, livro1, "veio sem uma página", 18.00);
multa1.exibirMulta();
