// Nullish Coalescing Operator
const nome = null;
const nomeValido = nome ?? "Convidado";
console.log(nomeValido);

const pessoa = {
    nome: "João",
    idade: 30,
    endereco: null
}

console.log(pessoa.endereco?.logradouro ?? "Endereço não informado")