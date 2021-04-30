var x = 0
var numerosEscolhidos = [];
var numerosEscolhidosParse = []


//sinceramente, o "const escolha" foi pego com base em um código da internet e ainda não entendo como funciona exatamente, mas entende basicamente o que faz e que da certo aqui
const escolha = document.getElementById('escolha');
escolha.addEventListener('keyup', function (e) {
  var key = e.which || e.keyCode;
  if (key == 13) {
    //colocando o numero entre 1 e 60
    if (document.getElementById('escolha').value < 1) {
      alert("Número Inválido, este deve ser maior que 0")
    } else if (document.getElementById('escolha').value > 60) {
      alert("Número Inválido, este deve ser menor que 61")
    } else {
      //colocando o valor do input no HTML
      x++
      var escolha = document.getElementById('escolha').value
      document.getElementById('escolha' + x).innerHTML = escolha
      numerosEscolhidos.push(escolha)
      //limpando o input
      var limpar = ""
      document.getElementById('escolha').value = limpar
      //transformando o array em numero inteiro
      numerosEscolhidosParse[(x-1)] = parseInt (numerosEscolhidos[(x-1)])
      //verificando se o número já foi escolhido
      for(y = 2; y < 7; y++){
        if(escolha == numerosEscolhidosParse[(x-y)]){
          alert("Você já escolheu esse número")
          botao()
        }
      }
      //finalizando o jogo: mostrando os números da maquina e o quantidade de acertos
      if (x == 6) {
        sorteio()
        for (x = 0; x < 6; x++) {
          numerosEscolhidosParse[x] =parseInt (numerosEscolhidos[x])
          var maquinaNumeros = numerosMaquina[x]
          document.getElementById('maquina' + (x + 1)).innerHTML = maquinaNumeros
        }
        var acertos = 0
        for (x = 0; x < 6; x++) {
          for (i = 0; i < 6; i++) {
            if (numerosEscolhidosParse[x] == numerosMaquina[i]) {
              acertos++
            }
          }
        }
        if(acertos == 1){
          var acertosHTML = "Voce teve um total de 1 acerto"
          document.getElementById('fim').innerHTML = acertosHTML
        }
        else{
        var acertosHTML = "Voce teve um total de " + acertos + " acertos"
        document.getElementById('fim').innerHTML = acertosHTML
        }
      }
    }
  }
});

//botão para retirar o último número
function botao() {
  numerosEscolhidosParse.pop()
  numerosEscolhidos.pop()
  var escolha = ""
  document.getElementById('escolha' + x).innerHTML = escolha
  x--
}

var numerosMaquina = [];

//sorteando os números da máquina
function sorteio() {
  while (numerosMaquina.length < 6) {
    var escolhaMaquina = Math.floor(Math.random() * 60 + 1);

    if (numerosMaquina.indexOf(escolhaMaquina) == -1)
      numerosMaquina.push(escolhaMaquina);
  }
  //função pra colocar os números em ordem crescente
  //peguei da internet, mas entendi a funcionalidade
  //...mais ou menos
  numerosMaquina.sort((a,b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0
  })
}

//tudo foi feito com lógica de funções básicas + pesquisa na internet, sei que poderia ser mais fácil com alguns outros conhecimentos e técnicas, mas sou iniciante. Obrigado por visitar meu código
//https://www.linkedin.com/in/cauan-felipe-tavares-8b760220b/
