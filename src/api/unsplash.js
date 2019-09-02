import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f04fe6cd92c020fdfc3b56076802bf34f7d6c374b151328507eb41bec354088c'
    }
});
