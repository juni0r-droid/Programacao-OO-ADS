var Veiculo = /** @class */ (function () {
    function Veiculo(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    // implementação única
    Veiculo.prototype.descrever = function (detalhado) {
        if (detalhado === true) {
            return "Veículo: " + this.marca + " " + this.modelo + " (descrição detalhada)";
        }
        else {
            return "Veículo: " + this.marca + " " + this.modelo;
        }
    };
    return Veiculo;
}());
// instancia
var carro = new Veiculo("Toyota", "Corolla");
console.log(carro.descrever());
console.log(carro.descrever(true));
