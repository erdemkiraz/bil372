import axios from 'axios'

function createUrl() {
    let port = 5000;
    return `${window.location.protocol}//${window.location.hostname}:${port}/api/`;
    // return `https://${window.location.hostname}:${port}/api/`;
}

export const BASE_URL = createUrl()

const AXIOS_CONFIG = {
    baseUrl :BASE_URL,
    withCredentials : true,
    headers:{
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    responseType : 'blob'
}

export const SERVICE_BASE  = axios.create(AXIOS_CONFIG);

export default function getUrl(path) {
    return BASE_URL + path
}