/* 
    * Higher-Order Functions - map, filter e reduce
*/

const nums = [3, 5, 6, 8, 12, 2, 83, 11, 23, 9, 65]
// map realiza um mapeamente em cima de um array, gerando um novo array transformado

const dobro = nums.map(num => num * 2)
console.log(nums, dobro)


// filter() itera em cima de um array, realizando a operação de filtragem dos elementos. Retorna um novo array

const pares = nums.filter(num => num % 2 === 0);

console.log(pares)

// reduce() itera um array, realizando uma operação de redução e retornando um único valor ao final

const soma = nums.reduce((acc, num) => acc + num )

console.log(soma)