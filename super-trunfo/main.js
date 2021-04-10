const cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem: "https://pm1.narvii.com/6809/ab20c7c73e900b9dfc40bed8f6e32bf9561f0bbcv2_hq.jpg",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

const cartaRafaela = {
    nome: "Bulbasauro",
    imagem: "https://static.wikia.nocookie.net/pocketmonster/images/a/ab/Bulbassauro.png/revision/latest?cb=20160908232122&path-prefix=pt-br",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

const cartaGuilherme = {
    nome: "Darth Vader",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/darth-vader_5yvm.jpg",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

const cartaLol = {
    nome: "Caitlyn",
    imagem: "http://1.bp.blogspot.com/-K7CbqWc1-p0/VLc98v85s0I/AAAAAAAABqk/-ZB684VVHbg/s1600/Caitlyn_OriginalSkin.jpg",
    atributos: {
        ataque: 95,
        defesa: 40,
        magia: 10
    }
}

const cartaNaruto = {
    nome: "Naruto",
    imagem: "https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_450x337.png",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 100
    }
}

const cartaHarry = {
    nome: "Harry Potter",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/89ff10dd-aa41-4d17-ae8f-835281ebd3fd_49hp.jpg",
    atributos: {
        ataque: 70,
        defesa: 50,
        magia: 95
    }
}

const cartaBatman = {
    nome: "Batman",
    imagem: "https://assets.b9.com.br/wp-content/uploads/2020/09/Batman-issue86-heder-1280x677.jpg",
    atributos: {
        ataque: 95,
        defesa: 70,
        magia: 0
    }
}

const cartaMarvel = {
    nome: "Capitã Marvel",
    imagem: "https://cinepop.com.br/wp-content/uploads/2018/09/capitamarvel21.jpg",
    atributos: {
        ataque: 90,
        defesa: 80,
        magia: 0
    }
}

let cartaMaquina = 0
let cartaJogador = 0
const cartas = [cartaPaulo, cartaRafaela, cartaGuilherme, cartaLol, cartaNaruto, cartaHarry, cartaBatman, cartaMarvel]

let pontosJogador = 0
let pontosMaquina = 0

atualizaPlacar()
atualizarQuantidadeDeCartas()

function atualizarQuantidadeDeCartas () {
    const divQuantidadeDeCartas = document.querySelector("#quantidade-cartas")

    divQuantidadeDeCartas.innerHTML = `Quantidade de cartas no jogo: ${cartas.length}`
}

function atualizaPlacar () {
    const divPlacar = document.querySelector("#placar")

    divPlacar.innerHTML = `Jogador ${pontosJogador}/${pontosMaquina} Máquina`
}

function sortearCarta () {
    let numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    let numeroCartaJogador = parseInt(Math.random() * cartas.length)
    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.querySelector("#btnSortear").disabled = true
    document.querySelector("#btnJogar").disabled = false

    exibirCartaDoJogador()
}

function exibirCartaDoJogador () {
    const divCartaJogador = document.querySelector("#carta-jogador")
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`

    const molduraCarta = document.createElement("img")
    molduraCarta.src = "https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png"
    molduraCarta.style.width = "inherit"
    molduraCarta.style.height = "inherit"
    molduraCarta.style.position = "absolute"

    const paragrafoNomeCarta = document.createElement("p")
    paragrafoNomeCarta.className = "carta-subtitle"
    paragrafoNomeCarta.textContent = `${cartaJogador.nome}`

    const divOpcoes = exibirOpcoesDaCarta(cartaJogador)

    divCartaJogador.appendChild(molduraCarta)
    divCartaJogador.appendChild(paragrafoNomeCarta)
    divCartaJogador.appendChild(divOpcoes)
}

function exibirCartaDaMaquina () {
    const divCartaMaquina = document.querySelector("#carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`

    const molduraCarta = document.createElement("img")
    molduraCarta.src = "https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png"
    molduraCarta.style.width = "inherit"
    molduraCarta.style.height = "inherit"
    molduraCarta.style.position = "absolute"

    const paragrafoNomeCarta = document.createElement("p")
    paragrafoNomeCarta.className = "carta-subtitle"
    paragrafoNomeCarta.textContent = `${cartaMaquina.nome}`

    const divOpcoes = exibirOpcoesDaCarta(cartaMaquina)

    divCartaMaquina.appendChild(molduraCarta)
    divCartaMaquina.appendChild(paragrafoNomeCarta)
    divCartaMaquina.appendChild(divOpcoes)
}

function exibirOpcoesDaCarta (carta) {
    const divOpcoes = document.createElement("div")
    divOpcoes.id = "opcoes"
    divOpcoes.className = "carta-status"

    for (let atributo in carta.atributos) {
        const inputOpcoes = document.createElement("input")
        const labelOpcoes = document.createElement("label")
        const paragrafoOpcoes = document.createElement("p")
        const tagBr = document.createElement("br")

        if (carta == cartaJogador) {
            inputOpcoes.name = "atributo"
            inputOpcoes.value = atributo
            inputOpcoes.type = "radio"

            labelOpcoes.textContent = `${atributo} ${carta.atributos[atributo]}`

            divOpcoes.appendChild(inputOpcoes)
            divOpcoes.appendChild(labelOpcoes)
            divOpcoes.appendChild(tagBr)
        } else {
            paragrafoOpcoes.textContent = `${atributo} ${carta.atributos[atributo]}`
            paragrafoOpcoes.name = "atributo"
            paragrafoOpcoes.value = atributo

            divOpcoes.appendChild(paragrafoOpcoes)
        }
    }

    return divOpcoes
}

function obterAtributoSelecionado () {
    const radioAtributo = document.querySelectorAll("[name='atributo']")

    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar () {
    const divWrapper = document.querySelector(".wrapper")

    const atributoSelecionado = obterAtributoSelecionado()

    const divResultado = document.createElement("div")
    divResultado.id = "resultado"

    const paragrafoResultado = document.createElement("p")
    paragrafoResultado.className = "resultado-final"

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        paragrafoResultado.textContent = "Venceu"
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        paragrafoResultado.textContent = "Perdeu"
        pontosMaquina++
    } else {
        paragrafoResultado.textContent = "Empatou"
    }

    setTimeout(() => {
        divResultado.remove()
    }, 1000);

    if (cartas.length == 0) {
        alert("Fim de jogo")

        if (pontosJogador > pontosMaquina) {
            paragrafoResultado.textContent = "Venceu"
        } else if (pontosMaquina > pontosJogador) {
            paragrafoResultado.textContent = "Perdeu"
        } else {
            paragrafoResultado.textContent = "Empatou"
        }
    } else {
        document.querySelector("#btnProximaRodada").disabled = false
    }

    divWrapper.append(divResultado)
    divResultado.appendChild(paragrafoResultado)

    document.querySelector("#btnJogar").disabled = true

    atualizaPlacar()
    exibirCartaDaMaquina()
    atualizarQuantidadeDeCartas()
}

function proximaRodada () {
    const divCartas = document.querySelector("#cartas")
    const botaoSortear = document.querySelector("#btnSortear")
    const botaoJogar = document.querySelector("#btnJogar")
    const botaoProximaRodada = document.querySelector("#btnProximaRodada")

    const divCartaJogador = document.createElement("div")
    divCartaJogador.id = "carta-jogador"
    divCartaJogador.className = "carta"

    const divCartaMaquina = document.createElement("div")
    divCartaMaquina.id = "carta-maquina"
    divCartaMaquina.className = "carta"

    // Remove as cartas
    while (divCartas.firstChild) {
        divCartas.removeChild(divCartas.firstChild)
    }

    // Cria as cartas novamente
    divCartas.appendChild(divCartaJogador)
    divCartas.appendChild(divCartaMaquina)

    botaoSortear.disabled = false
    botaoJogar.disabled = true
    botaoProximaRodada.disabled = true
}