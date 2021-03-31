let paulo = {
    nome: "Paulo",
    vitorias: 2,
    empates: 5,
    derrotas: 1,
    pontos: 0
}

let rafaela = {
    nome: "Rafaela",
    vitorias: 3,
    empates: 5,
    derrotas: 2,
    pontos: 0
}

rafaela.pontos = calculaPontos(rafaela)
paulo.pontos = calculaPontos(paulo)

function calculaPontos (jogador) {
    let pontos = (jogador.vitorias * 3) + jogador.empates

    return pontos
}

const jogadores = [rafaela, paulo]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela (jogadores) {
    const corpoTabela = document.querySelector("#tabelaJogadores")

    const trTabela = document.createElement("tr")

    const tdNome = document.createElement("td")
    const tdVitorias = document.createElement("td")
    const tdEmpates = document.createElement("td")
    const tdDerrotas = document.createElement("td")
    const tdPontos = document.createElement("td")

    for (let i = 0; i < jogadores.length; i++) {
        tdNome.textContent = jogadores[i].nome
        tdVitorias.textContent = jogadores[i].vitorias
        tdEmpates.textContent = jogadores[i].empates
        tdDerrotas.textContent = jogadores[i].derrotas
        tdPontos.textContent = jogadores[i].pontos

        trTabela.appendChild(tdNome)
        trTabela.appendChild(tdVitorias)
        trTabela.appendChild(tdEmpates)
        trTabela.appendChild(tdDerrotas)
        trTabela.appendChild(tdPontos)
    }

    corpoTabela.appendChild(trTabela)
}