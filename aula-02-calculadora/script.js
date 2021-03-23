var primeiroValor = parseInt(prompt('Digite o primeiro valor'))
var segundoValor = parseInt(prompt('Digite o segundo valor'))

var operacao = prompt("Digite:  \n<1> SOMA \n<2> SUBTRAÇÃO \n<3> MULTIPLICAÇÃO \n<4> DIVISÃO")

var resultado
var op

if (operacao == 1) {
    resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 2) {
    resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3) {
    resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 4) {
    resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
} else {
    document.write("<h2> Opção inválida. </h2>")
}

