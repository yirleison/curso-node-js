let consola = console.log;

let getUsuarioById = (id, callback) => {

    usuario = {
        nombre: 'Alfredo',
        id
    }

    if (id === 20) {
        callback(`No se encontraron datos con el ${id} en la DB`);
    } else {
        callback(null, usuario);
    }
}

getUsuarioById(10, (error, usuario) => {

    if (error) {
        consola(error);
    } else {
        consola(`El usuario solicitado es:`, usuario);
    }

});