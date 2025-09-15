class Carro {

    modelo: string;
    _cor: string;
    placa: string;
    numPortas: number;

    get cor(): string{
        return this._cor;
    }

    set cor(cor: string){
        this._cor = cor;
    }
}

let Gol_do_Carlos = new Carro();

Gol_do_Carlos.cor = "Preto"

console.log(Gol_do_Carlos.cor);


let c = new Carro();

c.cor = "Azul"

console.log(c.cor);

class Moto {

    modelo: string;
    _cor: string;
    placa: string;
    //modelo
    get modeloA(): string{
        return this.modelo;
    }

    set modeloA(modelo: string){
        this.modelo = modelo
    }
    //cor
    get corA(): string{
        return this._cor;
    }

    set corA(cor: string){
        this._cor = cor;
    }
   //placa
   get placaA(): string{
       return this.placa;
   }

   set placaA(placa: string){
      this.placa = placa
   }
}

let m = new Moto();
m.modeloA = "Honda"
m.corA = "Amarelo"
m.placaA = "SEILA"
console.log("modelo: ", m.modeloA);
console.log("cor: ", m.corA);
console.log("placa: ", m.placaA);