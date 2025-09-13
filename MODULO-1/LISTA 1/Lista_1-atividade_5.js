//Modelagem e Implementação de uma Classe para um Telefone
var Telefone = /** @class */ (function () {
    function Telefone() {
    }
    Object.defineProperty(Telefone.prototype, "marca", {
        //get e set para marca
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefone.prototype, "modelo", {
        //get e set para modelo
        get: function () {
            return this._modelo;
        },
        set: function (modelo) {
            this._modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefone.prototype, "bateria", {
        //get e set para bateria
        get: function () {
            return this._bateria;
        },
        set: function (bateria) {
            this._bateria = bateria;
        },
        enumerable: false,
        configurable: true
    });
    //definindo método carregar
    Telefone.prototype.carregar = function () {
        this._bateria = 100;
    };
    return Telefone;
}());
//instanciando objeto de Telefone
var celular = new Telefone();
celular._marca = "Xiaomi";
celular._modelo = "POCO C65";
celular._bateria = 25;
console.log("=== Antes de carregar ===");
console.log("Marca:", celular.marca);
console.log("Modelo:", celular.modelo);
console.log("Bateria:", celular.bateria + "%");
// Modificando o modelo e carregando o celular
celular.modelo = "POCO F4";
celular.carregar();
console.log("\n=== Depois de carregar ===");
console.log("Marca:", celular.marca);
console.log("Modelo:", celular.modelo);
console.log("Bateria:", celular.bateria + "%");
