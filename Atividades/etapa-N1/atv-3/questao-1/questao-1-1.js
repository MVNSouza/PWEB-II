// 1. Destructuring de Objeto: Você recebe um objeto respostaApi contendo { id: 101, username: "user_a", email: "a@ex.com", status: "ativo" } . Use Destructuring para extrair apenas username e email em variáveis separadas.

const respostaApi = {
    id: 101,
    username: "user_a",
    email: "a@ex.com",
    status: "ativo"
}

const {username, email} = respostaApi;
console.log(username); // user_a
console.log(email); // a@ex.com

// 2. Rest Operator em Objeto: Use Destructuring e o Rest Operator para extrair `id` e agrupar as demais propriedades restantes em um novo objeto chamado `dadosComplementares`.

const {id, ...dadosComplementares} = respostaApi
console.log(id); // 101
console.log(dadosComplementares); // { username: 'user_a', email: 'a@ex.com', status: 'ativo' }

/*3. Spread Operator: Combine um objeto de configurações padrão 
    ( configPadrao = { tema: 'dark', notificacoes: true } ) 
com um objeto de configurações do usuário 
    ( configUsuario = { notificacoes: false } )
usando o Spread Operator para criar configFinal . O resultado deve garantir que a configuração do usuário prevaleça. */

const configPadrao = {
    tema: 'dark',
    notificacoes: true
}
const configUsuario = { notificacoes: false }

const configFinal = {...configPadrao, notificacoes: configUsuario.notificacoes}
console.log(configFinal); // { tema: 'dark', notificacoes: false }