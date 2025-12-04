import { Usuario } from "./Usuario";
import { Livro } from "./Livro";
import { Emprestimos } from "./Emprestimos";
import { Multa } from "./Multas";
import { Relatorio } from "./Relatorio";
import * as fs from "fs";

export class Biblioteca {
  private livros: Livro[] = [];
  private usuarios: Usuario[] = [];
  private emprestimos: Emprestimos[] = [];
  public multas: Multa[] = [];

  //  Adicionar livro
  adicionarLivro(livro: Livro): void {
    this.livros.push(livro);
  }

  // Cadastrar usuário
  cadastrarUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario);
  }

  //  Consultar estoque (lista de livros disponíveis)
  consultarEstoque(): Livro[] {
    return this.livros;
  }

  //  Emprestar livro
  emprestarLivro(usuario: Usuario, livro: Livro): void {
  try {
    const emprestimo = new Emprestimos(usuario, livro);
    this.emprestimos.push(emprestimo);
    console.log(`${usuario.nome} emprestou ${livro.titulo}`);
  } catch (e) {
    console.log((e as Error).message);
  }
}


  //  Devolver livro
  devolverLivro(usuario: Usuario, livro: Livro): void {
    const emprestimo = this.emprestimos.find(
      (e) => e.usuario === usuario && e.livro === livro
    );

    if (emprestimo) {
      emprestimo.devolverLivro();
      livro._qtdDisponivel++;
    }
  }

  //  Aplicar multa
  aplicarMulta(usuario: Usuario, livro: Livro, motivo: string, valor: number): void {
    const multa = new Multa(usuario, livro, motivo, valor);
    this.multas.push(multa);
  }

  //  Relatórios (exemplo simples)
  gerarRelatorio(): void {
    const relatorio = new Relatorio(this.livros, this.usuarios, this.emprestimos);
    relatorio.gerarResumoGeral();
  }

  //  Persistência em JSON
  salvarDados(): void {
    const dados = {
      livros: this.livros,
      usuarios: this.usuarios,
      emprestimos: this.emprestimos,
      multas: this.multas,
    };
    fs.writeFileSync("dados.json", JSON.stringify(dados, null, 2));
  }

  carregarDados(): void {
    if (fs.existsSync("dados.json")) {
      const dados = JSON.parse(fs.readFileSync("dados.json", "utf8"));
      this.livros = dados.livros.map(
        (l: any) => new Livro(l.titulo, l.autor, l.paginas, l.editora, l.isbn, l.qtdDisponivel)
      );
    }
  }
}
