/* 
    Aula sobre métodos de repetição em JavaScript.
    Dia : 21/10/2025
*/

const alunos = ["Marcos", "Lupércio", "Daniel", "Kauã"]

// for of

for (let aluno of alunos) {
    console.log(aluno)
}

function imprimir(valor){
    console.log(valor)
}

alunos.forEach(imprimir);



/*
    Repetição em objetos
*/

const escola = {
    nome: "IFCE Campus Tauá",
    endereco: "Rua Antonio Benevides Teixeira, 01, Colibris",
    qtdAlunos: 500,
    cursos: ["ADS", "Letras", "Telemática", "Integrado em Agropecuária", "Integrado em Redes", "InfoNet"]
    

}

// For in

for (const chave in escola){
    console.log(chave + ": " +escola[chave])
}