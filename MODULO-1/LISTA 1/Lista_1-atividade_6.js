var Filme = /** @class */ (function () {
    function Filme() {
        this._visualizado = false;
    }
    Object.defineProperty(Filme.prototype, "titulo", {
        // get e set para titulo
        get: function () {
            return this._titulo;
        },
        set: function (titulo) {
            this._titulo = titulo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "diretor", {
        // get e set para diretor
        get: function () {
            return this._diretor;
        },
        set: function (diretor) {
            this._diretor = diretor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "duracao", {
        // get e set para duração
        get: function () {
            return this._duracao;
        },
        set: function (duracao) {
            this._duracao = duracao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Filme.prototype, "visualizado", {
        // get e set para visualizado
        get: function () {
            return this._visualizado;
        },
        set: function (visualizado) {
            this._visualizado = visualizado;
        },
        enumerable: false,
        configurable: true
    });
    // método de assistir
    Filme.prototype.assistir = function () {
        this._visualizado = true;
    };
    return Filme;
}());
//instanciando objetos  de Filme
var filme1 = new Filme();
filme1.titulo = "A Origem";
filme1.diretor = "Christopher Nolan";
filme1.duracao = 148;
var filme2 = new Filme();
filme2.titulo = "Matrix";
filme2.diretor = "Irmãos Wachowski";
filme2.duracao = 136;
// Modificar duração do filme 1
filme1.duracao = 150;
// Marcar filme 2 como assistido
filme2.assistir();
// Mostrar status de visualização
console.log("=== Status de Visualização ===");
console.log("".concat(filme1.titulo, " assistido?"), filme1.visualizado ? "Sim" : "Não");
console.log("".concat(filme2.titulo, " assistido?"), filme2.visualizado ? "Sim" : "Não");
//informações dos filmes
console.log("\n===informações dos Filmes===");
console.log("Titulo Filme1: ", filme1._titulo);
console.log("Diretor Filme1: ", filme1._diretor);
console.log("Duração Filme1: ", filme1._duracao, "minutos");
console.log("\nTitulo Filme2: ", filme2._titulo);
console.log("Diretor Filme2: ", filme2._diretor);
console.log("Duração Filme2: ", filme2._duracao, "minutos");
