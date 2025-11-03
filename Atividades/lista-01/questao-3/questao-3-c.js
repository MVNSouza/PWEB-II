/* 
    Implemente uma função que receba um número e retorne seu fatorial. Use recursividade. 
*/

function fatorial(num) {
    if (num < 0) {
        return "Valor inválido"
    } 

    if (num === 0 || num === 1) {
        return 1
    }

    let resultado = num * fatorial(num - 1)
    return resultado
}

console.log(fatorial(5))