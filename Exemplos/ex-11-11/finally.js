const produtos = [
  { nome: "Camisa Básica", preco: 49.90, qtd: 30, categoria: "Vestuário" },
  { nome: "Tênis Esportivo", preco: 199.90, qtd: 15, categoria: "Calçados" },
  { nome: "Relógio Digital", preco: 129.90, qtd: 20, categoria: "Acessórios" },
  { nome: "Mochila Escolar", preco: 89.90, qtd: 25, categoria: "Utilidades" },
  { nome: "Fone de Ouvido Bluetooth", preco: 149.90, qtd: 18, categoria: "Eletrônicos" },
  { nome: "Boné Estilizado", preco: 39.90, qtd: 40, categoria: "Acessórios" },
  { nome: "Jaqueta Jeans", preco: 179.90, qtd: 10, categoria: "Vestuário" },
  { nome: "Chinelo Casual", preco: 29.90, qtd: 50, categoria: "Calçados" },
  { nome: "Mouse Gamer", preco: 99.90, qtd: 12, categoria: "Eletrônicos" },
  { nome: "Carteira de Couro", preco: 59.90, qtd: 22, categoria: "Acessórios" }
];

const nums = [0, 2, 42, 4, 14, 63, 21, 19, 3];

// Padrão de composição de funções PIPE
// A saída de uma função serve como entrada de outra
// Usamos para criar um pipeline de execuções


const somatoria = (...nums) => {
    return nums.reduce((acc, atual) => acc + atual)
}

const pipe = (...fns) => (dados) => fns.reduce((acc, fn) => fn(acc), dados);
const exection = pipe (
    somatoria,
)

exection(nums)