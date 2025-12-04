class ProcessadorFormulario{
    public processar(): void{
        let botao = document.getElementById('enviar') as HTMLButtonElement;
        let input_nome = document.getElementById('nome') as HTMLInputElement;
        let input_senha = document.getElementById('senha') as HTMLInputElement;
        let resultado = document.getElementById('resultado');

        let botao_emprestar = document.getElementById('emprestar') as HTMLButtonElement;
        let livro = document.getElementById('livro') as HTMLInputElement;
        let livro_pego = document.getElementById('livro_pego');

        if(botao && input_nome && input_senha && resultado){
            botao.addEventListener('click', () => {
            resultado.textContent = `Login como ${input_nome.value} realizado com sucesso!`
            }) 
        }

        if(input_nome && botao_emprestar && livro && livro_pego){
            botao_emprestar.addEventListener('click', () => {
            livro_pego.textContent = `Livro ${livro.value}, emprestado para o usuário ${input_nome.value}`
            }) 
        }
    }
}


window.onload = () => {
    let processador = new ProcessadorFormulario();
    processador.processar();
}