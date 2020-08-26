import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-5b858.firebaseio.com/'
});

export default instance;