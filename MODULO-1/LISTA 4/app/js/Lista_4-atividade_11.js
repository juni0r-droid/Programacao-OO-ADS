var Moto = /** @class */ (function () {
    function Moto(placa, modelo) {
        this.placa = placa;
        this.modelo = modelo;
        this.disponivel = true;
    }
    Moto.prototype.alugar = function () {
        if (this.disponivel) {
            this.disponivel = false;
            return true;
        }
        return false;
    };
    Moto.prototype.devolver = function () {
        this.disponivel = true;
    };
    return Moto;
}());
var Entregador = /** @class */ (function () {
    function Entregador(nome) {
        this.nome = nome;
    }
    Entregador.prototype.alugarMoto = function (m) {
        if (m.alugar()) {
            this.motoAlugada = m;
            console.log("".concat(this.nome, " alugou a moto ").concat(m.placa));
        }
        else {
            console.log("Moto ".concat(m.placa, " n\u00E3o est\u00E1 dispon\u00EDvel"));
        }
    };
    return Entregador;
}());
var moto1 = new Moto("FBIO-123", "Honda");
var entregador1 = new Entregador("Fábio");
entregador1.alugarMoto(moto1);
