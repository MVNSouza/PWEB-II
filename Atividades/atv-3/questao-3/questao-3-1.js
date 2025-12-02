class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
    }

    exibirInfo() {
        console.log(`\nNome do usuário: ${this.nome}`);
        console.log(`Email: ${this.email}`);
    }
}

class Administrador extends Usuario {
    constructor(nome, email, nivelAcesso) {
        super(nome, email);
        this.nivelAcesso = nivelAcesso;
    }

    exibirInfo(){
        super.exibirInfo();
        console.log(`Nivel de acesso: ${this.nivelAcesso}`);
    }
}

const u = new Usuario('Marcos', "a@ex.com");
const adm = new Administrador('MarcosADM', "a@ex.com", 'Total');

u.exibirInfo();
adm.exibirInfo();