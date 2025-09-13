var Contador = /** @class */ (function () {
    function Contador() {
        this.valor = 0;
    }
    Contador.prototype.incrementar = function () {
        this.valor = this.valor + 1;
    };
    Contador.prototype.obterValor = function () {
        return this.valor;
    };
    return Contador;
}());
// instancia
var cont = new Contador();
cont.incrementar();
console.log(cont.obterValor());
cont.incrementar();
console.log(cont.obterValor());
cont.incrementar();
console.log(cont.obterValor());
