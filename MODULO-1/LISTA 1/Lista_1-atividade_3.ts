// Modelagem e Implementação de uma Classe para uma Conta Bancária

class Conta_Bancaria {
    _numero: number;
    _saldo: number;
    _titular: string;
    
    //get e set para numero
    get numero(): number {
        return this._numero
    }
    set numero (numero: number) {
        this._numero = numero;
    }
    //get e set para saldo
    get saldo(): number {
        return this._saldo
    }
    set saldo(saldo: number) {
        this._saldo = saldo;
    }
    //get e set para titular
    get titular(): string {
        return this._titular
    }
    set titular(titular: string) {
        this._titular = titular;
    }

    depositar(valor: number): void {
        this._saldo += valor;
    }
}

//intanciando objeto para conta bancaria
let conta1 = new Conta_Bancaria();
conta1.titular = "João";
conta1.numero = 2025;
conta1.saldo = 1000;
//primeira impressão
console.log("===conta bancária antes do depósito===");
console.log("Titular: ", conta1.titular);
console.log("Número: ", conta1.numero);
console.log("Saldo: ", "R$", conta1.saldo);

//Realizando depósito e modificações
conta1.titular = "Carlão"
conta1.depositar(100);

//objeto após o deposito
console.log("\n===conta bancária depois do depósito e modificações===");
console.log("Titular: ", conta1.titular);
console.log("Número: ", conta1.numero);
console.log("Saldo: ", "R$", conta1.saldo);

