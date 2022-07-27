import * as axios from 'axios';

export const backendClient = axios.create({baseURL: "http://localhost:8000", headers: {"content-type": "application/json"}});