class Paciente {
    _nome: string;
    _idade: number;
    private _sintomas: string[];

    constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
        this._sintomas = [];
    }

    get getSintomas(): string[] {
        return this._sintomas;
    }

    adicionarSintoma(s: string): void {
        if (typeof s === "string") {
            this._sintomas.push(s);
        }
    }
}

let paciente1 = new Paciente("Clara", 30);
console.log(`nome: ${paciente1._nome}  idade: ${paciente1._idade}`)
paciente1.adicionarSintoma("Febre");
console.log(paciente1.getSintomas);
