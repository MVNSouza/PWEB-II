const props = {
    id: "btn-submit",
    className: "btn-primary",
    onClick: () => {},
    "data-acao": "enviar",
    disabled: true,
    title: "Enviar formulário"
}

function prepararPropsBotao(propriedades){
    
    const {id, className, onClick, ...atributosNativos} = propriedades;
    const configuraoPadrao = {
        id: 'default-id',
        type: 'button',
        disabled: false
    }

    return propsFinais = {...configuraoPadrao, ...atributosNativos, disabled: false }
}

console.log(prepararPropsBotao(props))

/*
    8   - A utilização do Rest Operator foi necessária para facilitar a transformação das variáveis do objeto props evitando que fosse necessário fazer o binding uma por uma, transformando em array. Com todos transformados em array, o uso do Spread para devolver as propriedades a fim de transformar em objeto foi possível, desmembrando os arrays e os colocando como atributos da variavel propsFinais.
*/