var carta1 = {
    nome: "Macaco Triste",
    atributos: {
        ataque: 50,
        defesa: 10,
        magia: 75
    }
}

var carta2 = {
    nome: "+4 Uno",
    atributos: {
        ataque: 90,
        defesa: 30,
        magia: 10
    }
}

var carta3 = {
    nome: "Soldado Protetor",
    atributos: {
        ataque: 10,
        defesa: 90,
        magia: 10
    }
}

var baralho = []

baralho.push(carta1)
baralho.push(carta2)
baralho.push(carta3)

var cartaMaquina
var cartaJogador

function sortearCarta() {
    var indiceCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = baralho[indiceCartaMaquina]
    //console.log(cartaMaquina)

    var indiceCartaJogador = parseInt(Math.random() * 3)
    while (indiceCartaJogador == indiceCartaMaquina) {
        indiceCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = baralho[indiceCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibirOpcoes()
}

function exibirOpcoes() {
    var op = document.getElementById('opcoes')
    var opTexto = ""
    for(var atributo in cartaJogador.atributos) {
        opTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    op.innerHTML = opTexto
}

function atributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if(radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelect = atributoSelecionado()
    //console.log(atributoSelect)

    if(cartaJogador.atributos[atributoSelect] > cartaMaquina.atributos[atributoSelect]){
        alert('Venceu a inteligência artificial')
    } else if (cartaJogador.atributos[atributoSelect] < cartaMaquina.atributos[atributoSelect]) {
        alert('Perdeu para uma máquina')
    } else {
        alert('Empatou')
    }
}