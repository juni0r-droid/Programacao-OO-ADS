var Tarefa = /** @class */ (function () {
    function Tarefa(descricao) {
        this.descricao = descricao;
        this.concluida = false;
    }
    Tarefa.prototype.marcarConcluida = function () {
        this.concluida = true;
    };
    Object.defineProperty(Tarefa.prototype, "isConcluida", {
        get: function () {
            return this.concluida;
        },
        enumerable: false,
        configurable: true
    });
    return Tarefa;
}());
var Projeto = /** @class */ (function () {
    function Projeto() {
        this.tarefas = [];
    }
    Projeto.prototype.adicionarTarefa = function (t) {
        this.tarefas.push(t);
    };
    Projeto.prototype.contarConcluidas = function () {
        return this.tarefas.filter(function (t) { return t.isConcluida; }).length;
    };
    return Projeto;
}());
var projeto1 = new Projeto();
var t1 = new Tarefa("Criar API");
var t2 = new Tarefa("Testar API");
t1.marcarConcluida();
projeto1.adicionarTarefa(t1);
projeto1.adicionarTarefa(t2);
console.log("Tarefas concluídas:", projeto1.contarConcluidas());
