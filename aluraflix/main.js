let listaFilmesUrl = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZWFlNzRmOTItZjY1Ni00ZjZkLTk5MDgtOGFhOTYzNWFhYzhmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

function exibirListaFilmes (filmeUrl = "") {
    if (filmeUrl != "") {
        listaFilmesUrl.push(filmeUrl)
    }

    for (let i = 0; i < listaFilmesUrl.length; i++) {
        const imgTag = document.createElement("img")
        const body = document.querySelector("body")

        imgTag.setAttribute("src", `${listaFilmesUrl[i]}`)

        body.appendChild(imgTag)
    }
}

function adicionarFilme () {
    const inputFilme = document.querySelector("#filme")
    const filmeUrl = inputFilme.value

    if (filmeUrl.endsWith(".jpg")) {
        exibirListaFilmes(filmeUrl)
    } else {
        alert("Imagem Inválida")
    }

    inputFilme.value = ""
}

window.onload = () => exibirListaFilmes()