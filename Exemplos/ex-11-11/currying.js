const log = (nivel) => (tag) => (mensagem) => console.log(`[${nivel}] <${tag}>: ${mensagem}`); // template literals

const logErro = log("Erro");
const logErroServidor = logErro("Sevidor");
const logErroServidorConexao = logErroServidor("Falha em estabelecer conexão com o servidor")

// OR

log("OK")("API")("Dados recebidos com sucesso!")