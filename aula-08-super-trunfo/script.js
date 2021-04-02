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

var baralho = []

baralho.push(carta1)
baralho.push(carta2)
baralho.push(carta3)

var cartaMaquina
var cartaJogador

function sortearCarta() {
    var indiceCartaMaquina = parseInt(Math.random() * baralho.length)
    cartaMaquina = baralho[indiceCartaMaquina]

    var indiceCartaJogador = parseInt(Math.random() * baralho.length)
    while (indiceCartaJogador == indiceCartaMaquina) {
        indiceCartaJogador = parseInt(Math.random() * baralho.length)
    }
    cartaJogador = baralho[indiceCartaJogador]
    //console.log(cartaJogador)

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
    } else if (cartaJogador.atributos[atributoSelect] < cartaMaquina.atributos[atributoSelect]) {
        //alert('Perdeu para uma máquina')
        htmlResultado = '<p class="resultado-final">Perdeu para um bot</p>'
    } else {
        //alert('Empatou')
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }

    divResultado.innerHTML = htmlResultado
    exibeCartaMaquina()
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