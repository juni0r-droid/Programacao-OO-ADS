"use strict";
var ProcessadorFormulario = /** @class */ (function () {
    function ProcessadorFormulario() {
    }
    ProcessadorFormulario.prototype.processar = function () {
        var botao = document.getElementById('enviar');
        var input_nome = document.getElementById('nome');
        var input_senha = document.getElementById('senha');
        var resultado = document.getElementById('resultado');
        var botao_emprestar = document.getElementById('emprestar');
        var livro = document.getElementById('livro');
        var livro_pego = document.getElementById('livro_pego');
        if (botao && input_nome && input_senha && resultado) {
            botao.addEventListener('click', function () {
                resultado.textContent = "Login como ".concat(input_nome.value, " realizado com sucesso!");
            });
        }
        if (input_nome && botao_emprestar && livro && livro_pego) {
            botao_emprestar.addEventListener('click', function () {
                livro_pego.textContent = "Livro ".concat(livro.value, ", emprestado para o usu\u00E1rio ").concat(input_nome.value);
            });
        }
    };
    return ProcessadorFormulario;
}());
window.onload = function () {
    var processador = new ProcessadorFormulario();
    processador.processar();
};
