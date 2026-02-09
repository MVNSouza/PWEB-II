/* 
    Dado n numeros positivos, imprima a soma dos que sao primos
*/

function somarPrimos(lista) {
    let listaSeparada = String(lista.value).split(" ");
    let primos = []
    listaSeparada.forEach(numero => {
        let parsedNumero = Number(numero);

        if (parsedNumero <= 1) return false;
        if (parsedNumero <= 3) primos.push(parsedNumero);
        if (parsedNumero % 2 === 0 || parsedNumero % 3 === 0) return false;

        for (let i = 5; i * i <= parsedNumero; i += 6) {
            if (parsedNumero % i === 0 || parsedNumero % (i + 2) === 0);
        }

        return primos.push(parsedNumero);
    });

    let soma = primos.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    document.getElementById("resultado").innerText = `A soma dos valores ${primos} é ${soma}`
    
}
