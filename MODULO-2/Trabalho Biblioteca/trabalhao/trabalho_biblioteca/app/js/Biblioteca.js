"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Usuario_1 = require("./Usuario");
var Emprestimos_1 = require("./Emprestimos");
var Livro_1 = require("./Livro");
// Novo Alunos:
var aluno1 = new Usuario_1.AlunoGraduado("João", 1, 1);
// Novo livro:
var livro1 = new Livro_1.Livro("o iluminado", "Stephen King", 122, "Suma", "ISBN-10", 1);
// Novo Emprestimo:
var emprestimo1 = new Emprestimos_1.Emprestimos(aluno1, livro1);
livro1.emprestar();
