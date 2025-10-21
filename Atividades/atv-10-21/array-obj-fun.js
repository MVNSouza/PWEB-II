/*
    Criar um array de >> pelo menos 3 << produtos do supermercado, onde cada produto é um objeto.
    Estrutura:
        nome: string
        preco: number
        id: string
        qtd: number

*/

const carrinho = [
    {
        nome: "Aveia Yoki",
        preco: 12,
        ID: "1",
        qtd: 2
    },
    {
        nome: "Oléo Soya",
        preco: 8,
        ID: "2",
        qtd: 1
    },
    {
        nome: "Vassoura",
        preco: 15,
        ID: "3",
        qtd: 3
    }
]

carrinho.forEach(console.log)


