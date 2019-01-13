const axios = require('axios');

let consola = console.log;

const clima = async (lat, lng) => {
    let clim = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&nuits=metric&appid=c04b76e3d9c5471954e3763b0d561658`);
    if(clim.status != 200) {
        throw new Error ('Error al tratar de realizar la consulta !!');
    }
    return clim.data.main.temp;
}

module.exports = {
    clima
}