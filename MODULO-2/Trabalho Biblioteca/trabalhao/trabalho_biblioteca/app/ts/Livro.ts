export class Livro {
    private _titulo: string;
    private _autor: string;
    private _capitulos: number;
    private _editora: string;
    private _isbn: string;
    public _qtdDisponivel: number;
    private _status: "disponível" | "emprestado";

    constructor(titulo: string, autor: string, capitulos: number, editora: string, isbn: string, qtdDisponivel: number) {
        this._titulo = titulo;
        this._autor = autor;
        this._capitulos = capitulos;
        this._editora = editora;
        this._isbn = isbn;
        this._qtdDisponivel = qtdDisponivel;
        this._status = qtdDisponivel > 0 ? "disponível" : "emprestado";
    }

    get titulo(): string { return this._titulo; }
    get autor(): string { return this._autor; }
    get isbn(): string { return this._isbn; }
    get qtdDisponivel(): number { return this._qtdDisponivel; }
    get status(): string { return this._status; }

    public emprestar(): boolean {
        if (this._qtdDisponivel > 0) {
            this._qtdDisponivel--;
            if (this._qtdDisponivel === 0) this._status = "emprestado";
            return true;
        }
        return false;
    }

}
