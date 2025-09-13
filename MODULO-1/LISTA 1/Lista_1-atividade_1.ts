//Modelagem e Implementação de uma Classe para um Aluno

class Aluno{
    _nome: string;
    _matricula: number;
    _notaMedia: number;
    _diciplinas: string;
   //get e set para nome
    get nome(): string{
        return this._nome;
    }
    
    set nome(nome: string) {
        this._nome = nome;
    }
  //get e set para matricula
    get matricula(): number{
        return this._matricula;
    }

    set matricula(matricula: number) {
        this._matricula = matricula;
    }
  //get e set para notaMedia
    get notaMedia(): number{
        return this._notaMedia;
    }

    set notaMedia(notaMedia: number) {
        this._notaMedia = notaMedia;
    }
    //get e set para diciplinas
    get diciplinas(): string {
        return this._diciplinas;
    }

    set diciplinas(diciplinas: string) {
        this._diciplinas = diciplinas;
    }
    //método
    transferencia(tranf: number): void {
        this._matricula = tranf;
    }

}
// instanciando um objeto de Aluno
let aluno1 = new Aluno();
aluno1.nome = "Joao";
aluno1.matricula = 1405;
aluno1.notaMedia = 9.0;
aluno1.diciplinas = "Historia";

console.log("======Aluno 1 (antes da modificação)======")
console.log("Nome do aluno: ",aluno1.nome);
console.log("Matrícula: ",aluno1.matricula);
console.log("Nota media: ",aluno1.notaMedia);
console.log("Diciplina: ",aluno1.diciplinas);
//modificando
aluno1.transferencia(2025);
aluno1._notaMedia = 10;

console.log("======Aluno 1 (depois da modificação)======")
console.log("Nome do aluno: ",aluno1.nome);
console.log("Matrícula: ",aluno1.matricula);
console.log("Nota media: ",aluno1.notaMedia);
console.log("Diciplina: ",aluno1.diciplinas);