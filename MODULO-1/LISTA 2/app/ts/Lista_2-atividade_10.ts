class Conversor {
    constructor() {}

    public converter(valor: number): string;
    public converter(valor: string): number;
    public converter(valor: boolean): string;
    public converter(valor: any): any {
        if (typeof valor === "number") {
            return valor.toString();
        } else if (typeof valor === "string") {
            return Number(valor);
        } else if (typeof valor === "boolean") {
            return valor ? "verdadeiro" : "falso";
        }
    }
}

// instancia
let conv = new Conversor();
console.log(conv.converter(123));
console.log(conv.converter("456"));
console.log(conv.converter(true));
