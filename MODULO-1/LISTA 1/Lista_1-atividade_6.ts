class Filme {
    _titulo: string;
    _diretor: string;
    _duracao: number;
    _visualizado: boolean = false;

    // get e set para titulo
    get titulo(): string {
        return this._titulo;
    }
    set titulo(titulo: string) {
        this._titulo = titulo;
    }

    // get e set para diretor
    get diretor(): string {
        return this._diretor;
    }
    set diretor(diretor: string) {
        this._diretor = diretor;
    }

    // get e set para duração
    get duracao(): number {
        return this._duracao;
    }
    set duracao(duracao: number) {
        this._duracao = duracao;
    }

    // get e set para visualizado
    get visualizado(): boolean {
        return this._visualizado;
    }
    set visualizado(visualizado: boolean) {
        this._visualizado = visualizado;
    }

    // método de assistir
    assistir(): void {
        this._visualizado = true;
    }
}


//instanciando objetos  de Filme
let filme1 = new Filme();
filme1.titulo = "A Origem";
filme1.diretor = "Christopher Nolan";
filme1.duracao = 148;

let filme2 = new Filme();
filme2.titulo = "Matrix";
filme2.diretor = "Irmãos Wachowski";
filme2.duracao = 136;

// Modificar duração do filme 1
filme1.duracao = 150;

// Marcar filme 2 como assistido
filme2.assistir();

// Mostrar status de visualização
console.log("=== Status de Visualização ===");
console.log(`${filme1.titulo} assistido?`, filme1.visualizado ? "Sim" : "Não");
console.log(`${filme2.titulo} assistido?`, filme2.visualizado ? "Sim" : "Não");
//informações dos filmes
console.log("\n===informações dos Filmes===");
console.log("Titulo Filme1: ", filme1._titulo);
console.log("Diretor Filme1: ", filme1._diretor);
console.log("Duração Filme1: ", filme1._duracao, "minutos");

console.log("\nTitulo Filme2: ", filme2._titulo);
console.log("Diretor Filme2: ", filme2._diretor);
console.log("Duração Filme2: ", filme2._duracao, "minutos");