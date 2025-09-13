// Exercício 5: Funcionário
class Funcionario {
    private nome: string;
    private cargo: string;
    private salario: number;

    constructor(nome: string, cargo: string) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = 0;
    }

    public definirSalario(valor: number): void {
        if (valor > 1000) {
            this.salario = valor;
        } else {
            console.log("Salário deve ser maior que 1000.");
        }
    }

    public getSalario(): number {
        return this.salario;
    }

    public aumentarSalario(percentual: number): void {
        if (percentual > 0) {
            this.salario += (this.salario * percentual) / 100;
        }
    }
}

// Teste
const func = new Funcionario("Ana", "Desenvolvedora");
func.definirSalario(1200);
console.log("Salário inicial:", func.getSalario());
func.aumentarSalario(10);
console.log("Após aumento:", func.getSalario());