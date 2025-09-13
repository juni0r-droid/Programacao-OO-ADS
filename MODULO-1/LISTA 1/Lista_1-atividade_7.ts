//Modelagem e Implementação de uma Classe para um Computador

class Computador {
    _marca: string;
    _ram: number; 
    _ligado: boolean = false;

    // Get e Set para marca
    get marca(): string {
        return this._marca;
    }
    set marca(valor: string) {
        this._marca = valor;
    }

    // Get e Set para RAM
    get ram(): number {
        return this._ram;
    }
    set ram(valor: number) {
        this._ram = valor;
    }

    // Get e Set para status ligado
    get ligado(): boolean {
        return this._ligado;
    }
    set ligado(valor: boolean) {
        this._ligado = valor;
    }

    // Método para ligar o computador
    ligar(): void {
        this._ligado = true;
    }
}
//instanciando objeto de Computador
let pc1 = new Computador();
pc1.marca = "Dell";
pc1.ram = 8;
pc1.ligado = false;

// Modificando a RAM
pc1.ram = 16;

// Ligando o computador
pc1.ligar();

// Imprimindo status
console.log("=== Computador ===");
console.log("Marca:", pc1.marca);
console.log("RAM:", pc1.ram + "GB");
console.log("Ligado?", pc1.ligado ? "Sim" : "Não");
