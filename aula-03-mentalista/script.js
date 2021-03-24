var numeroSecreto = parseInt(Math.random() * 10) + 1
var tentativas = 3

while (tentativas > 0) {

    var chute = parseInt(prompt("Digite um número entre 0 e 10"))

    if (numeroSecreto == chute) {
        console.log("Acertou")
        break
    } else if (chute > numeroSecreto) {
        console.log("O número secreto é menor")
        tentativas--
    } else if (chute < numeroSecreto) {
        console.log("O número secreto é maior")
        tentativas--
    } else {
        console.log("Errou. O número secreto era " + numeroSecreto)
    }
}

if (chute != numeroSecreto) {
    console.log("Suas tentativas acabaram. O número secreto era " + numeroSecreto)
}
