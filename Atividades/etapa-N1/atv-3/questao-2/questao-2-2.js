const dispositivo1 = { info: { bateria: { nivel: 85 } } };
const dispositivo2 = { info: null };
const dispositivo3 = { info: { bateria: { nivel: 0 } } };

function exibirNivelBateria(dispositivo){
    console.log(dispositivo.info?.bateria.nivel ?? -1)
}

exibirNivelBateria(dispositivo1); // 85
exibirNivelBateria(dispositivo2); // -1 
// A saída de dispositivo2 se torna -1 a propriedade info é nula, caindo no Nullish Coalescing Operator retornando o valor -1 que está do outro lado da operação.

exibirNivelBateria(dispositivo3); // 0
// A saída de torna zero pois o valor da bateria existe e tem um valor diferente de null ou undefined, assim retornando seu próprio valor.