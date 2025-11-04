/*
    Crie um objeto que represente uma conta bancária, com as propriedades saldo e número da
    conta. O objeto deve ter métodos para depositar, sacar e informar saldo. O método
    depositar, deve receber o valor a ser adicionado ao saldo; o método sacar deve receber o
    valor a ser debitado do saldo (caso haja saldo disponível); o método informar saldo deve
    exibir uma mensagem informando ao usuário o seu saldo atual.
*/

class ContaBancaria {
    
    constructor(n){
        this.numero = n
        this.saldo = 0.0
    }
    

    depositar(valor){
        if (valor > 0) {
            this.saldo += valor
            console.log(`Depósito no valor de R$${valor} realizado com sucesso!\n`)
        } else {
            console.log("Valor de depósito inválido")
        }
    }

    sacar(valor){
        if (valor > 0) {
            this.saldo -= valor
            console.log(`Saque no valor de R$${valor} realizado com sucesso!\n`)
        } else {
            console.log("Valor de saque inválido")
        }
    }

    informarSaldo(){
        console.log(`Número da conta: ${this.numero}\nSaldo disponível: R$${this.saldo}\n`)
    }
}

const MinhaConta = new ContaBancaria("234332")

MinhaConta.informarSaldo()
MinhaConta.depositar(200)
MinhaConta.informarSaldo()
MinhaConta.sacar(150)
MinhaConta.informarSaldo()