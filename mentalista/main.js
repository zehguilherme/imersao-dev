const numeroSecreto = parseInt(Math.random() * 10)
let tentativas = 3

while (tentativas > 0) {
    var chute = parseInt(prompt("Digite um número entre 0 e 10"))

    if (numeroSecreto == chute) {
        console.log("Acertou")
        break
    } else if (chute > numeroSecreto) {
        console.log("O número secreto é menor")
        tentativas--
    } else if (chute < numeroSecreto) {
        console.log("O numero secreto é maior")
        tentativas--
    }
}

if (chute != numeroSecreto) {
    console.clear()
    alert(`Você ficou sem tentativas! O número era ${numeroSecreto}`)
    break
}