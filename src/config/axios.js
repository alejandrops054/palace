import axios from 'axios';

const clienteAxios = axios.create({
    //URL Microservicios - variable global se encuentra en archivo .env
    baseURL: 'https://0stlfq22ok.execute-api.us-east-1.amazonaws.com/dev/guestinformation'

});

export default clienteAxios;


//process.env.REACT_APP_URL