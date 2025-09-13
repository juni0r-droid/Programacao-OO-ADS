var Conversor = /** @class */ (function () {
    function Conversor() {
    }
    Conversor.prototype.converter = function (valor) {
        if (typeof valor === "number") {
            return valor.toString();
        }
        else if (typeof valor === "string") {
            return Number(valor);
        }
        else if (typeof valor === "boolean") {
            return valor ? "verdadeiro" : "falso";
        }
    };
    return Conversor;
}());
// instancia
var conv = new Conversor();
console.log(conv.converter(123));
console.log(conv.converter("456"));
console.log(conv.converter(true));
