var amanda = {
    nome: "Amanda",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

var dridri = {
    nome: "Adrieli",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

function calculaPontos(jogador) {
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

//amanda.pontos = calculaPontos(amanda)
//dridri.pontos = calculaPontos(dridri)
//console.log(amanda.pontos)

var jogadores = [amanda, dridri]

function imprimeJogadores(jogadores) {
    var html = ""

    for (var i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }

    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
}

imprimeJogadores(jogadores)

function adicionarVitoria(i) {
    var jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    imprimeJogadores(jogadores)
}

function adicionarEmpate(i) {
    var jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    imprimeJogadores(jogadores)
}

function adicionarDerrota(i) {
    var jogador = jogadores[i]
    jogador.derrotas++
    imprimeJogadores(jogadores)
}