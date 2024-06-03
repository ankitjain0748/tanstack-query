const BASE_URL = "https://api.noroff.dev/api/v1"
import fetch from 'node-fetch';
console.log("BASE_URL",BASE_URL);

let Api = fetch.create({
    baseURL: BASE_URL,
    headers: {
        "Accept":'application/json',
        
    }
});

export default Api;