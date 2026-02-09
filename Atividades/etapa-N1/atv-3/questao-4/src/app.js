import { calcularMedia, VALOR_PI } from "./utils/calculadora.js";
import buscarDados from "./services/buscarDados.js";

function main(){
    console.log(buscarDados())
    
    console.log(calcularMedia(1, 2, 3, 7, 9, 10, 3, 5))
    
    console.log(VALOR_PI)
}

main()