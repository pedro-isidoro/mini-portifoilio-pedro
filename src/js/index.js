const abas = document.querySelectorAll(".aba"); //cria a variavel lista aba

abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)
    });
});

function selecionarAba(aba){
    const abaSelecionada = document.querySelector(".aba.selecionado");
    abaSelecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");
}
function mostrarInformacoesDaAba(aba){
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
    informacaoSelecionada.classList.remove("selecionado");
        
    const idDoElementoDeInformacaoesDaAba = `informacao-${aba.id}`
        
    const informacoASerMostrada = document.getElementById(idDoElementoDeInformacaoesDaAba)
    informacoASerMostrada.classList.add("selecionado")
}