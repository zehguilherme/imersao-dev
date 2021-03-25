const primeiroValor = parseInt(prompt("Digite o primeiro valor"))
const segundoValor = parseInt(prompt("Digite o segundo valor"))

const escolhaOperacao = prompt("1 - Divisão , 2 - Multiplicação, 3 - Adição, 4 - Subtração")

const displayCalculadora = document.querySelector("h2")

switch (escolhaOperacao) {
    case 1:
        var resultado = primeiroValor / segundoValor
        var operacao = ":"
        break;

    case 2:
        resultado = primeiroValor * segundoValor
        operacao = "X"
        break;

    case 3:
        resultado = primeiroValor + segundoValor
        operacao = "+"
        break;

    case 4:
        resultado = primeiroValor - segundoValor
        operacao = "-"
        break;

    default:
        displayCalculadora.textContent = "Opção inválida"
        break;
}

displayCalculadora.textContent = `${primeiroValor} ${operacao} ${segundoValor} = ${resultado}`