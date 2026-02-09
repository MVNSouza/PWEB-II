/*
    Escreva uma função que receba uma quantidade não específica (aleatória) de números
    como argumentos e retorne o produtório dos números passados.
*/


function produtoLista(...numeros){
    let produtorio = numeros.reduce((valorAnterior, valorAtual) => valorAnterior * valorAtual, 1) 
    return produtorio
}

console.log(produtoLista(2, 3, 2)) // 12
