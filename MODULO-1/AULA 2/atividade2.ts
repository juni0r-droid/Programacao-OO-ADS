//atividade 2, criando classe e etc em java

class Nootbook {

    _tela: string;
    _cor: string;
    _marca: string;

    get tela(): string{
        return this._tela;
    }

    set tela(tela: string){
        this._tela = tela;
    }

    get cor(): string{
        return this._cor;
    }

    set cor(cor: string){
        this._cor = cor;
    }

    get marca(): string{
        return this._marca;
    }

    set marca(marca: string){
        this._marca = marca;
    }


}

let noot = new Nootbook();
noot._tela = "HD"
noot._cor = "Preto"
noot._marca = "Lenovo"

console.log("tela: ", noot._tela);
console.log("cor: ", noot._cor);
console.log("marca: ", noot._marca);