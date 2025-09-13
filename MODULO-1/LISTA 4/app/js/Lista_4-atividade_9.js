var Pedido = /** @class */ (function () {
    function Pedido(itens, total) {
        this.itens = itens;
        this.total = total;
    }
    Pedido.prototype.calcularTotal = function () {
        return this.total;
    };
    return Pedido;
}());
var Cliente = /** @class */ (function () {
    function Cliente(nome, email) {
        this.nome = nome;
        this.email = email;
    }
    Cliente.prototype.fazerPedido = function (p) {
        console.log("".concat(this.nome, " fez um pedido de R$").concat(p.calcularTotal()));
    };
    return Cliente;
}());
var pedido1 = new Pedido(["camiseta", "calça"], 200);
var cliente1 = new Cliente("João", "joao@email.com");
cliente1.fazerPedido(pedido1);
