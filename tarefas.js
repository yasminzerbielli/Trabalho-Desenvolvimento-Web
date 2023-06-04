function verificarHorario() {
  var splInicial = document.getElementById("splInicial").value.split(":");
  var splFinal = document.getElementById("splFinal").value.split(":");

  var inicialMin = (Number(splInicial[0] * 60)) + Number(splInicial[1]);
  var finalMin = (Number(splFinal[0] * 60)) + Number(splFinal[1]);
  var minutos = finalMin - inicialMin

  function lista_tarefas() {
    var tarefa = document.getElementById("tarefa").value;
    var nome = document.getElementById("nome").value;
    var siape = document.getElementById("siape").value;
    var objeto = {tarefa: tarefa, nome: nome, siape: siape, cargahorária: minutos, contador: contador };
    if (opcaoSelecionadacarga >= contador) {
      minhaLista.push(objeto);
      console.log(minhaLista);
      atualizarDiv();
    } else {
      console.log("Carga horária máxima já atingida");
    }
  }
  verificarDiferencaHorario(inicialMin, finalMin);
  selecionarRadio();

  function atualizarDiv() {
  const divTarefas = document.getElementById("tarefas");
  divTarefas.innerHTML = "";
  minhaLista.forEach(({tarefa, nome, siape, cargahorária}) => {
    const div = document.createElement("div");
    const txtTarefa = document.createTextNode(`Tarefa: ${tarefa}`);
    const txtNome = document.createTextNode(`Nome: ${nome}`);
    const txtSiape = document.createTextNode(`Siape: ${siape}`);
    const txtCargaHoraria = document.createTextNode(`Carga Horária: ${cargahorária} minutos`);
    div.appendChild(txtTarefa);
    div.appendChild(document.createElement("br"));
    div.appendChild(txtNome);
    div.appendChild(document.createElement("br"));
    div.appendChild(txtSiape);
    div.appendChild(document.createElement("br"));
    div.appendChild(txtCargaHoraria);
    divTarefas.appendChild(div);
  });
}


}
let contador = 0
function verificarDiferencaHorario(inicialMin, finalMin) {
  // console.log("AQUIIII")
  // console.log(totalMin); 
  const radios = document.querySelectorAll('input[name="carga"]');
  var opcaoSelecionadacarga;

 
  radios.forEach((radio) => {
    if (radio.checked) {
      opcaoSelecionadacarga = radio.value * 60;
    }});
  if (contador >= opcaoSelecionadacarga){
    console.log("Carga concluída")
    // var totaldeminutos = Math.trunc(contador / 60).toString() + ":" + (contador % 60).toString();
  }
  else{
    contador += Number(finalMin - inicialMin);
    console.log(contador) 
  }
}
const radios = document.querySelectorAll('input[name="opcao"]');
var opcaoSelecionada;
function selecionarRadio() {
  radios.forEach((radio) => {
    if (radio.checked) {
      opcaoSelecionada = radio.value;
    }
  });
}

var minhaLista = [];

