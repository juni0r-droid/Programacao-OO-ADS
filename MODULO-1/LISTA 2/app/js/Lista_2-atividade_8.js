var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario, departamento) {
        if (departamento === void 0) { departamento = "Geral"; }
        this.nome = nome;
        this.salario = salario;
        this.departamento = departamento;
    }
    Funcionario.prototype.ajustarSalario = function (valor) {
        if (typeof valor === "number") {
            this.salario = this.salario + (this.salario * (valor / 100));
        }
        else {
            this.salario = parseFloat(valor);
        }
    };
    return Funcionario;
}());
// instancia
var func = new Funcionario("João", 2000);
console.log("===", func.nome, "===");
func.ajustarSalario(10); // aumenta 10%
console.log(func.salario); // 2200
func.ajustarSalario("3500"); // define novo valor fixo
console.log(func.salario); // 3500
