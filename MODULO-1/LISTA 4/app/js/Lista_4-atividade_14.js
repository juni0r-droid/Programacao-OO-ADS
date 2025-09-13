var Carteira = /** @class */ (function () {
    function Carteira(saldoInicial) {
        this.saldo = saldoInicial;
        this.investimentos = [];
    }
    Object.defineProperty(Carteira.prototype, "getSaldo", {
        get: function () {
            return this.saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Carteira.prototype, "getInvestimentos", {
        get: function () {
            return this.investimentos;
        },
        enumerable: false,
        configurable: true
    });
    Carteira.prototype.adicionarInvestimento = function (ativo, valor) {
        this.saldo -= valor;
        this.investimentos.push({ ativo: ativo, valor: valor });
    };
    Carteira.prototype.removerInvestimento = function (ativo, valor) {
        for (var i = 0; i < this.investimentos.length; i++) {
            var inv = this.investimentos[i];
            if (inv.ativo === ativo && inv.valor === valor) {
                this.saldo += valor;
                this.investimentos.splice(i, 1); // remove pelo índice encontrado
                return true;
            }
        }
        return false;
    };
    return Carteira;
}());
var Transacao = /** @class */ (function () {
    function Transacao(carteira) {
        this.carteira = carteira;
    }
    Transacao.prototype.comprar = function (ativo, valor) {
        if (valor <= this.carteira.getSaldo) {
            this.carteira.adicionarInvestimento(ativo, valor);
            console.log("Compra realizada: ".concat(ativo, " por R$").concat(valor));
        }
        else {
            console.log("Saldo insuficiente!");
        }
    };
    Transacao.prototype.vender = function (ativo, valor) {
        var sucesso = this.carteira.removerInvestimento(ativo, valor);
        if (sucesso) {
            console.log(" Venda realizada: ".concat(ativo, " por R$").concat(valor));
        }
        else {
            console.log(" Investimento não encontrado!");
        }
    };
    return Transacao;
}());
var carteira1 = new Carteira(1000);
var transacao1 = new Transacao(carteira1);
console.log("Saldo inicial:", carteira1.getSaldo);
transacao1.comprar("PETR4", 500);
console.log("Saldo após compra:", carteira1.getSaldo);
transacao1.vender("PETR4", 500);
console.log("Saldo após venda:", carteira1.getSaldo);
transacao1.comprar("VALE3", 1200); // vai falhar, saldo insuficiente
