function calcularValor(valor, nome) {
    let valorTotal = Number(valor)*2
    let parteDecimal = "0";
    let divisor;
    console.log(valorTotal)

    if (String(valorTotal).includes(".")){
        parteDecimal = String(valorTotal).split(".")[1]
        console.log(parteDecimal)
        divisor = 10 ** parteDecimal.length
    }
    console.log(divisor)

    console.log(parteDecimal)
    resultado = valorTotal - Number(parteDecimal)/divisor
    alterarResultado(resultado, nome)
}

function alterarResultado(resultado, nome) {
    document.getElementById("resultado-title").innerText = `Promoção de ${String(nome)}`
    document.getElementById("resultado").innerText = `Leve 2 por R$ ${resultado}` 
}

calcularValor(2.5, "Camisa")