const produto = {
    nome: "Arroz Mariana",
    preco: "AM23",
    unidade: "KG",
    categoria: "Gênero Alimentício",

    toString: function() {
        const resultado = `Nome: ${this.nome} \nPreço: ${this.preco}\nUnidade: ${this.unidade}\nCategoria: ${this.categoria}`
        return resultado
    }
}

console.log(produto.toString())