class ContaBancaria {
    #saldo;

    constructor() {
        this.#saldo = 0;
    }

    depositar(valor) {
        this.#saldo += valor;
        console.log(`Deposito realizado!`);
    }

    sacar(valor) {
        if (valor >= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque realizado!`);
        } else {
            console.log(`Saldo insuficiente!`);
        }
    }
    consultarSaldo(){
        console.log(`Saldo atual: ${this.#saldo}`)
    }

}

const c = new ContaBancaria();

c.depositar(200);
c.consultarSaldo();
// c.#saldo = 320; // Property '#saldo' is not accessible outside class 'ContaBancaria' because it has a private identifier.
c.consultarSaldo();
