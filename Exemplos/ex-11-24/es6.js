// Exemplo do dia 24/11/2025
// Destructuring em objetos

const pessoa = {
    nome: "João",
    idade: 30,
    endereco: {
        logradouro: "Rua dos bobos",
        numero: 0
    }
}

const { nome: primeiroNome, idade } = pessoa;

const { logradouro: rua, numero } = pessoa.endereco;

console.log(rua, numero);

// Destructuring em arrays

const numeros = [23, 2, 32, 12];
// const [n1, n2, n3, n4] = numeros;
// console.log(n1)

// Troca de valores usando destructuring

let a = 10;
let b = 5;
console.log(a, b); 

[a, b] = [b, a];
console.log(a, b); 


// Rest Operator

const {nome, ...pessoaD} = pessoa;
console.log(pessoaD)

const [n1, n2, ...numerosD] = numeros;
console.log(n1);
console.log(n2);
console.log(numerosD);