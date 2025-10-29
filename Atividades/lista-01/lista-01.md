# Lista de Exercícios - 1

## Questão 1

**a.** Uma linguagem de tipagem estática é caracterizada por aquelas que exigem que seja declarado o tipo da variável no momento de sua inicialização. A verificação dos tipos é realizada em tempo de compilação, o compilador confere se todas as variáveis condiz com seus valores.

**b.** A tipagem estática aumenta a segurança porque evita conversões e operações entre tipos mantendo a integridade dos dados. A performance do sistema nessas operações não é afetado, pois são detectadas ainda em compilação, poupando recursos de execução. Mas a performance é aumentada por prover uma alocação de memória mais eficiente e dá a possibilidade de criação de ferramentas de autocompletar e de detecção de erros em tempo real.

**c.** A verificação é feita no valor da váriavel, diferentemente de linguagem estáticas que o tipo da váriavel está associado a ela mesma, isso custa muito em termos de performance, pois é necessário a verificação de cada valor, o que pode causar uma lentidão compativel com a quantidade de dados armazenados.

**d.** Linguagens de tipagem forte, como Java e Python, impedem conversões de variáveis para realização de determinadas operações, retornando um erro `TypeError`, por exemplo. As de tipagem fraca, como JavaScript, permitem e realizam essas conversões, permitindo o ocasionamento de bugs inesperados como transformar um `number` em `string` e realizar uma concatenação: `"2" + 1 = "21"`.

**e.** As linguagens híbridas fornecem a tipagem opcional das variáveis, fazendo que os compiladores e interpredadores façam as verificações nas variáveis com tipos inferidos em tempo de compilação e deixando as outras variáveis para serem verificadas de forma dinâmica.

**d.** O JS é uma linguagem de tipagem dinâmica. Não havendo capacidade de inferência estática de dados, associando o tipo ao valor e não a variável.

## Questão 2

* [Questão A](./questao-2/questao-2-a)
* [Questão B](./questao-2/questao-2-b)
* [Questão C](./questao-2/questao-2-c)
* [Questão D](./questao-2/questao-2-d)