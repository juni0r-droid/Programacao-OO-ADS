//Modelagem e Implementação de uma Classe para um Livro
var Livro = /** @class */ (function () {
    function Livro() {
        this._emprestado = "não";
    }
    Object.defineProperty(Livro.prototype, "titulo", {
        // Get e Set para título
        get: function () {
            return this._titulo;
        },
        set: function (valor) {
            this._titulo = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "autor", {
        // Get e Set para autor
        get: function () {
            return this._autor;
        },
        set: function (valor) {
            this._autor = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "paginas", {
        // Get e Set para número de páginas
        get: function () {
            return this._paginas;
        },
        set: function (valor) {
            this._paginas = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Livro.prototype, "emprestado", {
        // Get e Set para emprestado
        get: function () {
            return this._emprestado;
        },
        set: function (valor) {
            this._emprestado = valor;
        },
        enumerable: false,
        configurable: true
    });
    // Método de empréstimo
    Livro.prototype.emprestar = function () {
        this._emprestado = "sim";
    };
    // Método de devolução
    Livro.prototype.devolver = function () {
        this._emprestado = "não";
    };
    return Livro;
}());
// instanciando objetos de Livro
var livro1 = new Livro();
livro1.titulo = "Dom Casmurro";
livro1.autor = "Machado de Assis";
livro1.paginas = 256;
var livro2 = new Livro();
livro2.titulo = "1984";
livro2.autor = "George Orwell";
livro2.paginas = 328;
// Modificar o título do livro1
livro1.titulo = "Memórias Póstumas de Brás Cubas";
// Ativar o empréstimo no livro2
livro2.emprestar();
// Imprimir estados
console.log("=== Livro 1 ===");
console.log("Título:", livro1.titulo);
console.log("Autor:", livro1.autor);
console.log("Páginas:", livro1.paginas);
console.log("Emprestado:", livro1.emprestado);
console.log("\n=== Livro 2 ===");
console.log("Título:", livro2.titulo);
console.log("Autor:", livro2.autor);
console.log("Páginas:", livro2.paginas);
console.log("Emprestado:", livro2.emprestado);
