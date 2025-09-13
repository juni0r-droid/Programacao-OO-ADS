
class Participante {
  private confirmado: boolean = false;

  constructor(public readonly nome: string) {}

  public confirmarPresenca(): void {
    this.confirmado = true;
  }

  public get estaConfirmado(): boolean {
    return this.confirmado;
  }
}

class Evento {
  private participantes: Participante[] = [];

  constructor(public readonly nome: string, public readonly data: string) {}

  public inscrever(participante: Participante): void {
    if (this.participantes.some(p => p.nome === participante.nome)) {
      console.log(`${participante.nome} já está inscrito.`);
      return;
    }
    this.participantes.push(participante);
    console.log(`${participante.nome} inscrito no evento ${this.nome}.`);
  }

  public confirmarPresenca(nome: string): void {
    let participanteEncontrado: Participante | undefined;

    
    for (let p of this.participantes) {
      if (p.nome === nome) {
        participanteEncontrado = p;
        break;
      }
    }

    if (participanteEncontrado) {
      participanteEncontrado.confirmarPresenca();
      console.log(`Presença de ${nome} confirmada.`);
    } else {
      console.log(`Participante ${nome} não encontrado.`);
    }
  }

  public gerarRelatorio(): void {
    console.log(`\n--- Relatório de Confirmados: ${this.nome} ---`);
    let confirmados = this.participantes.filter(p => p.estaConfirmado);
    if (confirmados.length === 0) {
      console.log("Nenhum participante confirmou presença ainda.");
      return;
    }
    confirmados.forEach(p => console.log(`- ${p.nome}`));
  }
}


let evento = new Evento("Semana de Tecnologia", "21/09/2025");

let participante1 = new Participante("João");
let participante2 = new Participante("Maria");
let participante3 = new Participante("Carlos");

evento.inscrever(participante1);
evento.inscrever(participante2);
evento.inscrever(participante3);
evento.inscrever(participante1); // Tentativa duplicada

console.log("\n--- Confirmando presenças ---");
evento.confirmarPresenca("João");
evento.confirmarPresenca("Maria");

evento.gerarRelatorio();