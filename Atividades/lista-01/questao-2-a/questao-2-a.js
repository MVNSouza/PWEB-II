/*
    Questão A

    Escreva uma função que receba um valor em reais e o valor da cotação do dólar atual, calcule e retorne o valor após a conversão.
*/  

function calcularValor(valorReais, valorDolar){
    let valor = Number(valorReais) / Number(valorDolar)
    console.log(valor)
    document.getElementById("resultado").innerText = `O valor de R$ ${valorReais} em dólar é de $${valor.toFixed(2)}`
}