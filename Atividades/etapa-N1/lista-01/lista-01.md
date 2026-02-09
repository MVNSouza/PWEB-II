# Lista de Exercícios - 1

## Questão 1

**a.** Uma linguagem de tipagem estática é caracterizada por aquelas que exigem que seja declarado o tipo da variável no momento de sua inicialização. A verificação dos tipos é realizada em tempo de compilação, o compilador confere se todas as variáveis condiz com seus valores.

**b.** A tipagem estática aumenta a segurança porque evita conversões e operações entre tipos mantendo a integridade dos dados. A performance do sistema nessas operações não é afetado, pois são detectadas ainda em compilação, poupando recursos de execução. Mas a performance é aumentada por prover uma alocação de memória mais eficiente e dá a possibilidade de criação de ferramentas de autocompletar e de detecção de erros em tempo real.

**c.** A verificação é feita no valor da váriavel, diferentemente de linguagem estáticas que o tipo da váriavel está associado a ela mesma, isso custa muito em termos de performance, pois é necessário a verificação de cada valor, o que pode causar uma lentidão compativel com a quantidade de dados armazenados.

**d.** Linguagens de tipagem forte, como Java e Python, impedem conversões de variáveis para realização de determinadas operações, retornando um erro `TypeError`, por exemplo. As de tipagem fraca, como JavaScript, permitem e realizam essas conversões, permitindo o ocasionamento de bugs inesperados como transformar um `number` em `string` e realizar uma concatenação: `"2" + 1 = "21"`.

**e.** As linguagens híbridas fornecem a tipagem opcional das variáveis, fazendo que os compiladores e interpredadores façam as verificações nas variáveis com tipos inferidos em tempo de compilação e deixando as outras variáveis para serem verificadas de forma dinâmica.

**d.** O JS é uma linguagem de tipagem dinâmica. Não havendo capacidade de inferência estática de dados, associando o tipo ao valor e não a variável.
---

## Questão 2

* [Questão A](./questao-2/questao-2-a)
* [Questão B](./questao-2/questao-2-b)
* [Questão C](./questao-2/questao-2-c)
* [Questão D](./questao-2/questao-2-d)
---

## Questão 3
* [Questão A](./questao-3/questao-3-a.js) 
    - Escreva uma função que receba dois números e um caractere como argumentos. O caractere recebido informa que tipo de operação deve ser realizada. Por exemplo, ao receber o caractere “+”, a função deve calcular a soma dos números passados como argumento e retornar o resultado. Use “+” para soma, “-” para subtração, “/” para divisão e “*” para multiplicação.
* [Questão B](./questao-3/questao-3-b.js) 
    - Escreva uma função que receba uma quantidade não específica(aleatória) de números como argumentos e retorne o produtório dos números passados.
* [Questão C](./questao-3/questao-3-c.js) 
    - Implemente uma função que receba um número e retorne seu fatorial. Use recursividade.
* [Questão D](./questao-3/questao-3-d.js)
    - Implemente uma função que receba um array de números e retorne um outro array contendo somente os números ímpares encontrados.
* [Questão E](./questao-3/questao-3-e.js)
    - Suponha que você está implementando um sistema de e-commerce e precise calcular o valor total de um produto no carrinho do cliente, aplicando ou não um desconto. Nesse contexto, escreva uma função que receba o valor unitário do produto, a quantidade solicitada e o desconto a ser aplicado e retorne o valor total da compra. Ao chamar a função, podemos passar ou não o desconto a ser aplicado. Caso nenhum valor de desconto seja passado, o padrão deve ser 0 (sem desconto).
* [Questão F](./questao-3/questao-3-f.js)
    - Crie um objeto que represente uma conta bancária, com as propriedades saldo e número da conta. O objeto deve ter métodos para depositar, sacar e informar saldo. O método depositar, deve receber o valor a ser adicionado ao saldo; o método sacar deve receber o valor a ser debitado do saldo (caso haja saldo disponível); o método informar saldo deve exibir uma mensagem informando ao usuário o seu saldo atual.