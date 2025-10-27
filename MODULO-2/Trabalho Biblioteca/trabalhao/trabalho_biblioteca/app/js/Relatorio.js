"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relatorio = void 0;
var Relatorio = /** @class */ (function () {
    function Relatorio(livros, usuarios, emprestimos) {
        this.livros = livros;
        this.usuarios = usuarios;
        this.emprestimos = emprestimos;
    }
    Relatorio.prototype.gerarResumoGeral = function () {
        console.log(" --- RELATÓRIO GERAL DA BIBLIOTECA --- ");
        console.log("Total de livros cadastrados: ".concat(this.livros.length));
        console.log("Usu\u00E1rios cadastrados: ".concat(this.usuarios.length));
        console.log("Empr\u00E9stimos registrados: ".concat(this.emprestimos.length));
        var emprestimosAtivos = this.emprestimos.filter(function (e) { return e.status === "Ativo"; }).length;
        var emprestimosConcluidos = this.emprestimos.filter(function (e) { return e.status === "Concluído"; }).length;
        console.log("Empr\u00E9stimos Ativos: ".concat(emprestimosAtivos));
        console.log("Empr\u00E9stimos Conclu\u00EDdos: ".concat(emprestimosConcluidos));
    };
    Relatorio.prototype.listarLivrosEmprestados = function () {
        console.log("\n LIVROS EMPRESTADOS:");
        this.emprestimos
            .filter(function (e) { return e.status === "Ativo"; })
            .forEach(function (e) { return console.log("- ".concat(e.livro.titulo, " \u2192 ").concat(e.usuario.nome)); });
    };
    return Relatorio;
}());
exports.Relatorio = Relatorio;
