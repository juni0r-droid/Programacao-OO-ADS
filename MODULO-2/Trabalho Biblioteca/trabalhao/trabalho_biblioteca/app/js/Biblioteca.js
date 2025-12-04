"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Biblioteca = void 0;
const Emprestimos_1 = require("./Emprestimos");
const Multas_1 = require("./Multas");
const Relatorio_1 = require("./Relatorio");
const fs = __importStar(require("fs"));
class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
        this.emprestimos = [];
        this.multas = [];
    }
    //  Adicionar livro
    adicionarLivro(livro) {
        this.livros.push(livro);
    }
    // Cadastrar usuário
    cadastrarUsuario(usuario) {
        this.usuarios.push(usuario);
    }
    //  Consultar estoque (lista de livros disponíveis)
    consultarEstoque() {
        return this.livros;
    }
    //  Emprestar livro
    emprestarLivro(usuario, livro) {
        try {
            const emprestimo = new Emprestimos_1.Emprestimos(usuario, livro);
            this.emprestimos.push(emprestimo);
            console.log(`${usuario.nome} emprestou ${livro.titulo}`);
        }
        catch (e) {
            console.log(e.message);
        }
    }
    //  Devolver livro
    devolverLivro(usuario, livro) {
        const emprestimo = this.emprestimos.find((e) => e.usuario === usuario && e.livro === livro);
        if (emprestimo) {
            emprestimo.devolverLivro();
            livro._qtdDisponivel++;
        }
    }
    //  Aplicar multa
    aplicarMulta(usuario, livro, motivo, valor) {
        const multa = new Multas_1.Multa(usuario, livro, motivo, valor);
        this.multas.push(multa);
    }
    //  Relatórios (exemplo simples)
    gerarRelatorio() {
        const relatorio = new Relatorio_1.Relatorio(this.livros, this.usuarios, this.emprestimos);
        relatorio.gerarResumoGeral();
    }
    //  Persistência em JSON
    salvarDados() {
        const dados = {
            livros: this.livros,
            usuarios: this.usuarios,
            emprestimos: this.emprestimos,
            multas: this.multas,
        };
        fs.writeFileSync("dados.json", JSON.stringify(dados, null, 2));
    }
    carregarDados() {
        const caminho = "dados.json";
        if (fs.existsSync(caminho)) {
            const dados = JSON.parse(fs.readFileSync(caminho, "utf8"));
            this.livros = dados.livros || [];
            this.usuarios = dados.usuarios || [];
            this.emprestimos = dados.emprestimos || [];
            this.multas = dados.multas || [];
        }
    }
}
exports.Biblioteca = Biblioteca;
