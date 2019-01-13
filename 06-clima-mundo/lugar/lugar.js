const axios = require('axios');

let consola = console.log;

const getLugarLatLng = async (direccion) => {

    // Esta función permite escapear los caractéres especiales para asi construir una url amigable.
    let encodeUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=address=${encodeUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para esta cuidad ${direccion}`);
    }
    let resource = resp.data.results[0];
    // consola(JSON.stringify(resp.data.results, undefined, 2));
    return {
        direccion: resource.formatted_address,
        lat: resource.geometry.location.lat,
        lng: resource.geometry.location.lng
    }
}

module.exports = {
    getLugarLatLng
}