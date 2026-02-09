function simularChamadaAPI(){
    return new Promise((resolve, reject) => {
        console.log("Chamando API...");

        setTimeout(() => {
            const sucesso = Math.random() > 0.2;

            if (sucesso) {
                resolve({status: 'ok', dados: [1, 2, 3]});
            } else {
                reject('Erro ao chamar API');
            }
        }, 2000)
    })
}

simularChamadaAPI()
    .then( (resposta) => console.log(resposta.dados) )
    .catch( (erro) => console.error(erro) );