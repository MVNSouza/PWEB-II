/*
    Implemente uma função que receba um array de números e retorne um outro array contendo
    somente os números ímpares encontrados.
*/

function selectOddNumbers(numbers){
    array = []
    numbers.forEach(n => {
        if (n % 2 !== 0) {
            array.push(n)
        }
    });
    return array
}


numberArray = [2, 3, 5, 6, 7, 8, 11]

console.log(selectOddNumbers(numberArray)) // [ 3, 5, 7, 11 ]