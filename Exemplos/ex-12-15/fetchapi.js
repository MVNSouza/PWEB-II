/* fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch( err => console.error(err) ); */

async function buscarProdutos() {
    try{
        let resposta = fetch('https://fakestoreapi.com/products').then();
    } catch {
        
    }
}
console.log("Fim do código síncrono...");