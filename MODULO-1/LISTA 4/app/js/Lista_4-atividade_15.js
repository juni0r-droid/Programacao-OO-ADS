var Participante = /** @class */ (function () {
    function Participante(nome) {
        this.nome = nome;
        this.confirmado = false;
    }
    Participante.prototype.confirmarPresenca = function () {
        this.confirmado = true;
    };
    Object.defineProperty(Participante.prototype, "estaConfirmado", {
        get: function () {
            return this.confirmado;
        },
        enumerable: false,
        configurable: true
    });
    return Participante;
}());
var Evento = /** @class */ (function () {
    function Evento(nome, data) {
        this.nome = nome;
        this.data = data;
        this.participantes = [];
    }
    Evento.prototype.inscrever = function (participante) {
        if (this.participantes.some(function (p) { return p.nome === participante.nome; })) {
            console.log("".concat(participante.nome, " j\u00E1 est\u00E1 inscrito."));
            return;
        }
        this.participantes.push(participante);
        console.log("".concat(participante.nome, " inscrito no evento ").concat(this.nome, "."));
    };
    Evento.prototype.confirmarPresenca = function (nome) {
        var participanteEncontrado;
        for (var _i = 0, _a = this.participantes; _i < _a.length; _i++) {
            var p = _a[_i];
            if (p.nome === nome) {
                participanteEncontrado = p;
                break;
            }
        }
        if (participanteEncontrado) {
            participanteEncontrado.confirmarPresenca();
            console.log("Presen\u00E7a de ".concat(nome, " confirmada."));
        }
        else {
            console.log("Participante ".concat(nome, " n\u00E3o encontrado."));
        }
    };
    Evento.prototype.gerarRelatorio = function () {
        console.log("\n--- Relat\u00F3rio de Confirmados: ".concat(this.nome, " ---"));
        var confirmados = this.participantes.filter(function (p) { return p.estaConfirmado; });
        if (confirmados.length === 0) {
            console.log("Nenhum participante confirmou presença ainda.");
            return;
        }
        confirmados.forEach(function (p) { return console.log("- ".concat(p.nome)); });
    };
    return Evento;
}());
var evento = new Evento("Semana de Tecnologia", "21/09/2025");
var participante1 = new Participante("João");
var participante2 = new Participante("Maria");
var participante3 = new Participante("Carlos");
evento.inscrever(participante1);
evento.inscrever(participante2);
evento.inscrever(participante3);
evento.inscrever(participante1); // Tentativa duplicada
console.log("\n--- Confirmando presenças ---");
evento.confirmarPresenca("João");
evento.confirmarPresenca("Maria");
evento.gerarRelatorio();
