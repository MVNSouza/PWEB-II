function calcularMedia(n1, n2) {
    let media = ((n1 * 2) + (n2 * 3))/5

    isAprovado(media) ? 
    document.getElementById("resultado").innerText = `Aprovado com ${media.toFixed(2)}` :
    document.getElementById("resultado").innerText = `Reprovado com ${media.toFixed(2)}`

}

function isAprovado(media) {
    if (media > 7) {
        return true
    } else {
        return false
    }
}