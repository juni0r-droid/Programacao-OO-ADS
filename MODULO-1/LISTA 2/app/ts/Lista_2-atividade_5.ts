class Calculadora {
    public somar(a: number, b: number): number;
    public somar(a: string, b: string): string;
    public somar(a: any, b: any): any {
        return a + b;
    }
}
//instancia
let calc = new Calculadora(); 
console.log(calc.somar(2, 3));
console.log(calc.somar("Olá", " Mundo"));
