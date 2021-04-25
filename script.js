var x = 0
var numerosEscolhidos = [];
var numerosEscolhidosParse = []

const escolha = document.getElementById('escolha');
escolha.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) { 
    if(document.getElementById('escolha').value < 1){
      alert("Número Inválido, este deve ser maior que 0")
    }
    else if(document.getElementById('escolha').value > 60){
      alert("Número Inválido, este deve ser menor que 60")
    }
    else{
    x++
    var escolha = document.getElementById('escolha').value
    document.getElementById('escolha'+x).innerHTML = escolha   
    numerosEscolhidos.push(escolha)
    console.log(numerosEscolhidos)
    if(x == 6){
    sorteio()
    for(x = 0; x < 6; x++){
    numerosEscolhidosParse[x] = parseInt(numerosEscolhidos[x])
    var maquinaNumeros = numerosMaquina[x]
    console.log(maquinaNumeros)
    document.getElementById('maquina'+(x+1)).innerHTML = maquinaNumeros
    //document.getElementById('maquina'+(x+1)).style.backgroundColor = 'blue'
    }
    var acertos = 0
    for(x = 0; x < 6; x++){
      for(i = 0; i < 6; i++){
      if(numerosEscolhidosParse[x] == numerosMaquina[i]){
        acertos++
      }
    }
    }
    console.log(numerosMaquina)
    console.log(numerosEscolhidos)
    console.log(numerosEscolhidosParse)
    console.log(acertos)
    var acertosHTML = "Voce teve um total de " + acertos + " acertos"
    document.getElementById('fim').innerHTML = acertosHTML
    }
    }
    }
    return x
});

function botao(){
  var escolha = ""
  document.getElementById('escolha'+x).innerHTML = escolha
  x--
  numerosEscolhidos.pop
}

var numerosMaquina = [];
function sorteio(){
    while (numerosMaquina.length < 6) {
        var escolhaMaquina = Math.floor(Math.random()*60 + 1);

        if (numerosMaquina.indexOf(escolhaMaquina) == -1)
            numerosMaquina.push(escolhaMaquina);
            console.log(numerosMaquina)
    }
}

