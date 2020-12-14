import axios from 'axios';
import {keys} from '../utils/.env.local';

const findCEP = async (name:string) => {
   
    const cep = await axios.get(`https://viacep.com.br/ws/${name}/json/`);
    const geocode = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${cep.data.cep}&key=${keys.googleKey}`);
    
    const lat = geocode.data.results[0].geometry.location.lat;
    const lng = geocode.data.results[0].geometry.location.lng;

    const result = await axios.get(`https://api.hgbrasil.com/weather?key=${keys.weatherHGKey}&lat=${lat}&lon=${lng}&user_ip=remote`);

    const resposta = {
        temperatura: {
            atual: result.data.results.temp,
            minima: result.data.results.forecast[0].min,
            maxima: result.data.results.forecast[0].max
        }, 
        cidade: result.data.results.city,
        descricao: result.data.results.description,
        umidade: result.data.results.humidity,
        vento: result.data.results.wind_speedy,
        img: result.data.results.condition_slug
    }
    return resposta;
}

export {
    findCEP
}