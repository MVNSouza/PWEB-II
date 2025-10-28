function calcularCircun(raio) {
    let resultado = (Math.PI * 2) * raio 
    
    document.getElementById("resultado").innerText = `O valor da circunferência de um circulo de raio ${raio} é igual a: ${resultado}`
}