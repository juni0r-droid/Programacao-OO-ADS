class Funcionario {
    public nome: string;
    public salario: number;
    public departamento: string;

    constructor(nome: string, salario: number, departamento: string = "Geral") {
        this.nome = nome;
        this.salario = salario;
        this.departamento = departamento;
    }

    // assinaturas das sobrecargas
    public ajustarSalario(aumentoPercentual: number): void;
    public ajustarSalario(novoSalario: string): void;

    public ajustarSalario(valor: any): void {
        if (typeof valor === "number") {
            this.salario = this.salario + (this.salario * (valor / 100));
        } else {
            this.salario = parseFloat(valor);
        }
    }
}

// instancia
let func = new Funcionario("João", 2000);
console.log("===", func.nome, "===")
func.ajustarSalario(10);       // aumenta 10%
console.log(func.salario);     // 2200
func.ajustarSalario("3500");   // define novo valor fixo
console.log(func.salario);     // 3500
