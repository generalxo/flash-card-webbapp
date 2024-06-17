import axios from 'axios';
//https://localhost:7163/api/auth/login
const ApiClient = axios.create({
    baseURL: 'https://localhost:7163/api',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default ApiClient;