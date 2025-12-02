export function calcularMedia(...numeros){
    let soma = numeros.reduce((acc, valor) => (acc += valor), 0)
    return soma / numeros.length 
}

export const VALOR_PI = 3.14;