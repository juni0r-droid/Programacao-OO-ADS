class Tarefa {
    private descricao: string;
    private concluida: boolean;

    constructor(descricao: string) {
        this.descricao = descricao;
        this.concluida = false;
    }

    marcarConcluida(): void {
        this.concluida = true;
    }

    get isConcluida(): boolean {
        return this.concluida;
    }
}

class Projeto {
    tarefas: Tarefa[] = [];

    adicionarTarefa(t: Tarefa): void {
        this.tarefas.push(t);
    }

    contarConcluidas(): number {
        return this.tarefas.filter(t => t.isConcluida).length;
    }
}

let projeto1 = new Projeto();
let t1 = new Tarefa("Criar API");
let t2 = new Tarefa("Testar API");
t1.marcarConcluida();
projeto1.adicionarTarefa(t1);
projeto1.adicionarTarefa(t2);
console.log("Tarefas concluídas:", projeto1.contarConcluidas());
