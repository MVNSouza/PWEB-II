// Síncrono e Bloqueante
import { readFileSync } from 'node:fs';
// trava a execução até ler o arquivo
const dados = readFileSync('Exemplos/ex-12-09/arquivo.txt', 'utf-8');
console.log("Leitura concluída:", dados);