//Modelagem e Implementação de uma Classe para um Computador
var Computador = /** @class */ (function () {
    function Computador() {
        this._ligado = false;
    }
    Object.defineProperty(Computador.prototype, "marca", {
        // Get e Set para marca
        get: function () {
            return this._marca;
        },
        set: function (valor) {
            this._marca = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "ram", {
        // Get e Set para RAM
        get: function () {
            return this._ram;
        },
        set: function (valor) {
            this._ram = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Computador.prototype, "ligado", {
        // Get e Set para status ligado
        get: function () {
            return this._ligado;
        },
        set: function (valor) {
            this._ligado = valor;
        },
        enumerable: false,
        configurable: true
    });
    // Método para ligar o computador
    Computador.prototype.ligar = function () {
        this._ligado = true;
    };
    return Computador;
}());
//instanciando objeto de Computador
var pc1 = new Computador();
pc1.marca = "Dell";
pc1.ram = 8;
pc1.ligado = false;
// Modificando a RAM
pc1.ram = 16;
// Ligando o computador
pc1.ligar();
// Imprimindo status
console.log("=== Computador ===");
console.log("Marca:", pc1.marca);
console.log("RAM:", pc1.ram + "GB");
console.log("Ligado?", pc1.ligado ? "Sim" : "Não");
