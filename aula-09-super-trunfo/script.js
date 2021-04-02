var carta1 = {
    nome: "Macaco Triste",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmAlf0aPL8-BUEJyqeYzrBTzZu3kDdmmNB6XG1RyDfPgjJfttAtyad9EpUhlP8VSeDgU&usqp=CAU",
    atributos: {
        ataque: 50,
        defesa: 10,
        magia: 75
    }
}

var carta2 = {
    nome: "+4 Uno",
    imagem: "http://3.bp.blogspot.com/-3l5As6_PrRo/UQkrP0xBYYI/AAAAAAAAAuw/amRO4u3tL4I/w1200-h630-p-k-no-nu/6449957_460s.jpg",
    atributos: {
        ataque: 90,
        defesa: 30,
        magia: 10
    }
}

var carta3 = {
    nome: "Soldado Protetor",
    imagem: "https://i.kym-cdn.com/photos/images/newsfeed/001/371/191/f7b.jpg",
    atributos: {
        ataque: 10,
        defesa: 90,
        magia: 10
    }
}

var carta4 = {
    nome: "Pombo",
    imagem: "https://pbs.twimg.com/media/D1PQP7CX0AEGDr7.jpg:large",
    atributos: {
        ataque: 60,
        defesa: 40,
        magia: 60
    }
}

var carta5 = {
    nome: "Pica Pau Puto",
    imagem: "https://pbs.twimg.com/profile_images/954312092496154624/i3B_SRyE_400x400.jpg",
    atributos: {
        ataque: 85,
        defesa: 20,
        magia: 30
    }
}

var carta6 = {
    nome: "Mo Paz",
    imagem: "https://pbs.twimg.com/media/EvRLpPgXcAALBAe.jpg",
    atributos: {
        ataque: 10,
        defesa: 90,
        magia: 80
    }
}

var carta7 = {
    nome: "Sai Maluco Todo Dia Isso",
    imagem: "https://i.pinimg.com/originals/f5/38/4c/f5384c0fb15fdee7b36985ca4e2d98d5.png",
    atributos: {
        ataque: 30,
        defesa: 70,
        magia: 50
    }
}

var carta8 = {
    nome: "F",
    imagem: "https://i1.sndcdn.com/avatars-000171827536-fu8j6k-original.jpg",
    atributos: {
        ataque: 20,
        defesa: 100,
        magia: 45
    }
}

var carta9 = {
    nome: "Big Dog",
    imagem: "https://ih1.redbubble.net/image.1247194141.6773/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    atributos: {
        ataque: 100,
        defesa: 70,
        magia: 10
    }
}

var carta10 = {
    nome: "Harry Potter on Drugs",
    imagem: "https://i.dailymail.co.uk/i/pix/2013/07/05/article-0-1AAD2CD6000005DC-68_1024x615_large.jpg",
    atributos: {
        ataque: 30,
        defesa: 30,
        magia: 100
    }
}


var baralho = []

baralho.push(carta1)
baralho.push(carta2)
baralho.push(carta3)
baralho.push(carta4)
baralho.push(carta5)
baralho.push(carta6)
baralho.push(carta7)
baralho.push(carta8)
baralho.push(carta9)
baralho.push(carta10)

var cartaMaquina
var cartaJogador

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaDeck()

function atualizaDeck() {
    var divDeck = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + baralho.length

    divDeck.innerHTML = html 
}

function atualizaPlacar() {
    var divPlacar = document.getElementById('placar')
    var hmtl = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"

    divPlacar.innerHTML = hmtl
}

function sortearCarta() {
    var indiceCartaMaquina = parseInt(Math.random() * baralho.length)
    cartaMaquina = baralho[indiceCartaMaquina]

    baralho.splice(indiceCartaMaquina, 1)

    var indiceCartaJogador = parseInt(Math.random() * baralho.length)
    cartaJogador = baralho[indiceCartaJogador]

    baralho.splice(indiceCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById('carta-jogador')
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png"
    style=" width: inherit; height: inherit; position: absolute;">`

    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`

    var opTexto = ""

    for(var atributo in cartaJogador.atributos) {
        opTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opTexto + "</div>"
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
    var divResultado = document.getElementById('resultado')
    var atributoSelect = atributoSelecionado()
    //console.log(atributoSelect)

    if(cartaJogador.atributos[atributoSelect] > cartaMaquina.atributos[atributoSelect]){
        //alert('Venceu a inteligência artificial')
        htmlResultado = '<p class="resultado-final">Venceu a máquina</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelect] < cartaMaquina.atributos[atributoSelect]) {
        //alert('Perdeu para uma máquina')
        htmlResultado = '<p class="resultado-final">Perdeu para um bot</p>'
        pontosMaquina++
    } else {
        //alert('Empatou')
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    if(baralho.length == 0) {
        alert("Fim de Jogo")

        if (pontosJogador > pontosMaquina){
            htmlResultado = "<p class='resultado-final'>WE ARE THE CHAMPIONS MY FRIEND</p>"
        } else if (pontosJogador < pontosMaquina) {
            htmlResultado = "<p class='resultado-final'>YOU LOOSE</p>"
        } else {
            htmlResultado = "<p class='resultado-final'>EMPATÔ</p>"
        }

    } else {
        document.getElementById('btnProximaRodada').disabled = false
    }

    divResultado.innerHTML = htmlResultado

    document.getElementById('btnJogar').disabled = true
   
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaDeck()
}

function exibeCartaMaquina() {
    var divCartaMaq = document.getElementById('carta-maquina')
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png"
    style=" width: inherit; height: inherit; position: absolute;">`

    divCartaMaq.style.backgroundImage = `url(${cartaMaquina.imagem})`

    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`

    var opTexto = ""

    for(var atributo in cartaMaquina.atributos) {
        opTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaq.innerHTML = moldura + nome + html + opTexto + "</div>"
}

function proximaRodada() {
    var divCartas = document.getElementById('cartas')
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`

    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true
    
    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""

}