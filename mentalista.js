var numSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas) {
    var chute = parseInt(prompt("Escolha um número entre 0 e 10"))

    if (numSecreto == chute) {
        alert("Parabêns Você acertou!\n FIM DO JOGO")
        break
    } else if (chute > numSecreto) {
        alert("O número secreto é menor!")
        tentativas = tentativas - 1
    } else if (chute < numSecreto) {
        alert("O número secreto é maior")
        tentativas = tentativas - 1
    }
}
if (chute != numSecreto) {
    alert("Suas chances acabaram! O número secreto era " + numSecreto + " ! \n FIM DO JOGO")
}