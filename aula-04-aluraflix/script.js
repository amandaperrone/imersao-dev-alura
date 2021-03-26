/*

var filmes = ["Divertidamente", "A vida secreta de Walter Mitty", "História de um casamento"]

filmes.push("Rogue One")
filmes.push("As branquelas")

for (var i = 0; i  < filmes.length; i++) {
    console.log(filmes[i])
}

*/

var listaFilmes = []

listaFilmes.push("https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_UX182_CR0,0,182,268_AL_.jpg") // Divertidamente
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BODYwNDYxNDk1Nl5BMl5BanBnXkFtZTgwOTAwMTk2MDE@._V1_UX182_CR0,0,182,268_AL_.jpg") // A vida secreta de Walter Mitty
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_UX182_CR0,0,182,268_AL_.jpg") // História de um casamento
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_UX182_CR0,0,182,268_AL_.jpg") // Rogue One
listaFilmes.push("https://m.media-amazon.com/images/M/MV5BMTY3OTg2OTM3OV5BMl5BanBnXkFtZTYwNzY5OTA3._V1_UX182_CR0,0,182,268_AL_.jpg") // As branquelas

var nomeFilmes = ["Divertidamente", "A vida secreta de Walter Mitty", "História de um casamento", "Rogue One", "As branquelas"]

for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">")
    document.write("<h2>" + nomeFilmes[i] + "</h2>")
}