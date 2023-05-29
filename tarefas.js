//agora vai essa porcaria
function verificarHorario() {
    var splInicial = document.getElementById("splInicial").value.split(":");
    var splFinal = document.getElementById("splFinal").value.split(":");

    var inicialMin = (Number(splInicial[0] * 60)) + Number(splInicial[1]);
    var finalMin = (Number(splFinal[0] * 60)) + Number(splFinal[1]);

    verificarDiferencaHorario(inicialMin, finalMin);
    selecionarRadio()
    lista_tarefas()
    contador()
}
function verificarDiferencaHorario(inicialMin, finalMin) {
    var totalMin = Number(finalMin - inicialMin);
    console.log(Math.trunc(totalMin / 60).toString() + ":" + (totalMin % 60).toString());
}
function selecionarRadio() {
    const radios = document.querySelectorAll('input[name="opcao"]');

    let opcaoSelecionada;
    radios.forEach((radio) => {
      if (radio.checked) {
        opcaoSelecionada = radio.value;
      }
    });
}
function lista_tarefas(){
    var tarefa = document.getElementById("tarefa").value;
    var minhaLista = [];
    minhaLista.push([tarefa])
    console.log(minhaLista[0])

}
function contador(){
    var contador = 0
    const radios = document.querySelectorAll('input[name="carga"]');

    let opcaoSelecionada;
    radios.forEach((radio) => {
      if (radio.checked) {
        opcaoSelecionada = radio.value;
      }
    });
    while (contador <= Number(opcaoSelecionada)){
        contador = contador +  totalMin
    }
    console.log(contador)
}