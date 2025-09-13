class Funcionario {
    _nome: string;
    _cargo: string;
    _salario: number;

    // Get e Set para nome
    get nome(): string {
        return this._nome;
    }
    set nome(valor: string) {
        this._nome = valor;
    }

    // Get e Set para cargo
    get cargo(): string {
        return this._cargo;
    }
    set cargo(valor: string) {
        this._cargo = valor;
    }

    // Get e Set para salário
    get salario(): number {
        return this._salario;
    }
    set salario(valor: number) {
        this._salario = valor;
    }

    // Método para aumentar salário
    aumentarSalario(fator: number): void {
        this._salario *= fator;
    }
}

// Instanciando dois objetos de Funcionario
let func1 = new Funcionario();
func1.nome = "Lucas";
func1.cargo = "Vendedor";
func1.salario = 2000;

let func2 = new Funcionario();
func2.nome = "Carla";
func2.cargo = "Assistente";
func2.salario = 1800;

// Modificando o cargo de um
func1.cargo = "Gerente";

// Ativando o método de aumento no outro (10%)
func2.aumentarSalario(1.10);

// Imprimindo os salários
console.log("=== Funcionários ===");
console.log(`${func1.nome} - Cargo: ${func1.cargo} - Salário: R$ ${func1.salario.toFixed(2)}`);
console.log(`${func2.nome} - Cargo: ${func2.cargo} - Salário: R$ ${func2.salario.toFixed(2)}`);
