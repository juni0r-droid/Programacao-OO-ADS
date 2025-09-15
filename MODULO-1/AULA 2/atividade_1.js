var Carro = /** @class */ (function () {
    function Carro() {
    }
    Object.defineProperty(Carro.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    return Carro;
}());
var Gol_do_Carlos = new Carro();
Gol_do_Carlos.cor = "Preto";
console.log(Gol_do_Carlos.cor);
var c = new Carro();
c.cor = "Azul";
console.log(c.cor);
var Moto = /** @class */ (function () {
    function Moto() {
    }
    Object.defineProperty(Moto.prototype, "modeloA", {
        //modelo
        get: function () {
            return this.modelo;
        },
        set: function (modelo) {
            this.modelo = modelo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Moto.prototype, "corA", {
        //cor
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Moto.prototype, "placaA", {
        //placa
        get: function () {
            return this.placa;
        },
        set: function (placa) {
            this.placa = placa;
        },
        enumerable: false,
        configurable: true
    });
    return Moto;
}());
var m = new Moto();
m.modeloA = "Honda";
m.corA = "Amarelo";
m.placaA = "SEILA";
console.log("modelo: ", m.modeloA);
console.log("cor: ", m.corA);
console.log("placa: ", m.placaA);
