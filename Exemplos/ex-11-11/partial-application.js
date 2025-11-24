// Função genérica de 3 argumentos

const log = (nivel) => (tag, mensagem) => console.log(`[${nivel}] <${tag}>: ${mensagem}`); // template literals

/* 
    A técnica de partial application
*/

const logInfo = log("INFO");
const logErro = log("ERRO");
const logWarn = log("WARNING");

log("TESTE")("PERFORMANCE", "Teste finalizado com sucesso");