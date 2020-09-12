import axios from 'axios';

const api = axios.create({
    baseURL: "https://medclin.herokuapp.com"
});

export default api;