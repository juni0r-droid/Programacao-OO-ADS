var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    Object.defineProperty(Funcionario.prototype, "nome", {
        // Get e Set para nome
        get: function () {
            return this._nome;
        },
        set: function (valor) {
            this._nome = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "cargo", {
        // Get e Set para cargo
        get: function () {
            return this._cargo;
        },
        set: function (valor) {
            this._cargo = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "salario", {
        // Get e Set para salário
        get: function () {
            return this._salario;
        },
        set: function (valor) {
            this._salario = valor;
        },
        enumerable: false,
        configurable: true
    });
    // Método para aumentar salário
    Funcionario.prototype.aumentarSalario = function (fator) {
        this._salario *= fator;
    };
    return Funcionario;
}());
// Instanciando dois objetos de Funcionario
var func1 = new Funcionario();
func1.nome = "Lucas";
func1.cargo = "Vendedor";
func1.salario = 2000;
var func2 = new Funcionario();
func2.nome = "Carla";
func2.cargo = "Assistente";
func2.salario = 1800;
// Modificando o cargo de um
func1.cargo = "Gerente";
// Ativando o método de aumento no outro (10%)
func2.aumentarSalario(1.10);
// Imprimindo os salários
console.log("=== Funcionários ===");
console.log("".concat(func1.nome, " - Cargo: ").concat(func1.cargo, " - Sal\u00E1rio: R$ ").concat(func1.salario.toFixed(2)));
console.log("".concat(func2.nome, " - Cargo: ").concat(func2.cargo, " - Sal\u00E1rio: R$ ").concat(func2.salario.toFixed(2)));
