function registrarEvento(tipo, ...metadados) {
    console.log(tipo, metadados);
}

registrarEvento('casamento', {convidados: 10}, 'Evento fechado');
registrarEvento('festa de aniversário', {convidados: 50}, 'Música', 'Alimentação gratuíta');