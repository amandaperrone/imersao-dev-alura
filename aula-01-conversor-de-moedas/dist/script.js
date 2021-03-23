var valorEmDolarTexto = prompt("Qual valor (em dólar) você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * 5.5

alert(valorEmReal.toFixed(2))