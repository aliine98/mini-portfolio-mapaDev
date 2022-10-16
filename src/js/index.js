const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
   aba.addEventListener("click", () => {
      if (aba.classList.contains("selecionado")) {
         return;
      }

      selecionarAba(aba);
      mostrarInformacoesAba(aba);
   });
});

function selecionarAba(aba) {
   const abaSelecionada = document.querySelector(".aba.selecionado");
   abaSelecionada.classList.remove("selecionado");
   aba.classList.add("selecionado");
}

function mostrarInformacoesAba(aba) {
   const informacaoSelecionada = document.querySelector(".informacao.selecionado");
   informacaoSelecionada.classList.remove("selecionado");

   const idElementoInformacoesAba = `informacao-${aba.id}`;
   document.getElementById(idElementoInformacoesAba).classList.add("selecionado");
}
