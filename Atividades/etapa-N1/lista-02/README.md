# Lista de Atividade 2

**Tabela de conteúdos**
- [Objetivo](#objetivo)
- [Requisitos Gerais](#requisitos-gerais-para-todas-as-questões)
- [Lista de Atividades](#lista-de-atividades)
    - [Desconto em farmácia](#cálculo-de-desconto-em-farmácia)
    - [Lan house](#lan-house)
    - [Promoção de supermercado](#promoção-de-supermercado)

## Objetivo
Praticar a integração entre HTML e JavaScript para resolver problemas do mundo real, aplicando lógica de
programação, manipulação de dados, manipulação do DOM e gerenciamento de eventos.

## Requisitos Gerais para Todas as Questões:
* **Evitar Recarregamento da Página:** As interações do usuário, como o envio de formulários, devem ser processadas via JavaScript, impedindo o recarregamento completo da página. Utilize event.preventDefault() para controlar o comportamento padrão dos eventos.
* **Manipulação do DOM:** As atualizações na interface do usuário (exibição de resultados, mensagens de erro) devem ser feitas dinamicamente através da manipulação do Document Object Model (DOM) com JavaScript.
* Eventos: Utilize os eventos apropriados (ex: submit para formulários, click para botões, change para campos de entrada) para capturar as ações do usuário e disparar a lógica necessária.
* **Validação de Entrada:** Implemente validações básicas para os dados de entrada, garantindo que o usuário forneça informações no formato esperado antes do processamento.
* **Feedback Visual:** Forneça feedback visual claro ao usuário para mensagens de erro e saídas bem-sucedidas da aplicação. Por exemplo, use cores (vermelho para erro, verde para sucesso), ícones (X para erro, ✔ para sucesso) ou áreas de texto dedicadas para exibir essas informações de forma proeminente na interface do usuário.
* **Estrutura do Código:** Organize seu código JavaScript de forma legível e modular, utilizando funções para separar responsabilidades.
* **Boas Práticas:** Siga boas práticas de desenvolvimento web, como a semântica do HTML e a separação de responsabilidades (HTML para estrutura, CSS para estilo, JavaScript para comportamento).

## Lista de Atividades

### Cálculo de desconto em farmácia

[Clique aqui para resolução](./farmacia/)

Uma farmácia está oferecendo um desconto promocional: na compra de duas unidades de um medicamento, o cliente recebe desconto equivalente aos centavos do valor total.

**Tarefa:**
1. Crie uma página HTML com um formulário com campos para:
    - Descrição do medicamento.
    - Preço unitário (em reais).
    - Botão "Calcular Promoção".
2. Ao clicar no botão, exiba abaixo do formulário:
    - O nome do medicamento em promoção.
    - O valor total **com desconto** (ex: R$ 12,45 → 2 unidades = R$ 24,90 → desconto de R$ 0,90 → total R$ 24,00).
3. Exemplo de Entrada/Saída:
    - Entrada: "Aspirina", R$ 12,45.
    - Saída: "Promoção de Aspirina. Leve 2 por apenas R$ 24,00".

---

### Lan House

[Clique aqui para resolução](./lanhouse/)

Uma lan house cobra por tempo de uso em intervalos de 15 minutos. Frações extras são cobradas integralmente.

**Tarefa:**
1. Crie uma página HTML com um formulário com campos para:
    - Valor a cada 15 minutos (ex: R$ 5,00).
    - Tempo de uso do cliente (em minutos).
    - Botão "Calcular Valor".
2. Ao clicar no botão, calcule e exiba o valor total a ser pago.
    - Exemplo: 16 minutos = 2 intervalos de 15 minutos → R$ 10,00.
3. Dica: Use `Math.ceil()` para arredondar valores para cima.

---

### Promoção de Supermercado

[Clique aqui para resolução](./)

Um supermercado oferece 50% de desconto em um item na compra de três unidades do mesmo produto.
**Tarefa:**
1. Crie uma página HTML com um formulário com campos para:
    - Descrição do produto.
    - Preço unitário.
    - Botão "Ver Promoção".
2. Ao clicar no botão, exiba:
    - Mensagem da promoção (ex: "Leve 3 e pague 2 por R$ X,XX + 1 por R$ Y,YY").
    - Valor total da compra com desconto aplicado.
3. Exemplo de Cálculo:
    - Preço unitário: R$ 10,00.
    - Total: (2 × R$ 10,00) + (1 × R$ 5,00) = R$ 25,00.