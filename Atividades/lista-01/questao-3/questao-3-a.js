/*
    Crie uma função que receba três argumentos, dois números e um operador. Por exemplo:
        (2, 3, *)
    E que retorne a operação, referente ao operador (+, -, * ou x, /), desses dois números.
*/

function realizarOperacao(num1, num2, operador){
    if (operador === "+")
        return num1 + num2;
    else if (operador === "-")
        return num1 - num2
    else if (operador === "*" || operador === "x")
        return num1 * num2
    else if (operador === "/")
        return num1 / num2
    else 
        return "Operador inválido!"
}

console.log(realizarOperacao(6, 2, "+")) // 8
console.log(realizarOperacao(6, 2, "-")) // 4
console.log(realizarOperacao(6, 2, "*")) // 12
console.log(realizarOperacao(6, 2, "/")) // 3