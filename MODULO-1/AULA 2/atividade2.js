//atividade 2, criando classe e etc em java
var Nootbook = /** @class */ (function () {
    function Nootbook() {
    }
    Object.defineProperty(Nootbook.prototype, "tela", {
        get: function () {
            return this._tela;
        },
        set: function (tela) {
            this._tela = tela;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nootbook.prototype, "cor", {
        get: function () {
            return this._cor;
        },
        set: function (cor) {
            this._cor = cor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nootbook.prototype, "marca", {
        get: function () {
            return this._marca;
        },
        set: function (marca) {
            this._marca = marca;
        },
        enumerable: false,
        configurable: true
    });
    return Nootbook;
}());
var noot = new Nootbook();
noot._tela = "HD";
noot._cor = "Preto";
noot._marca = "Lenovo";
console.log("tela: ", noot._tela);
console.log("cor: ", noot._cor);
console.log("marca: ", noot._marca);
