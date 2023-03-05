import axios from "axios";

// Local
// const BASE_URL = "http://localhost:3001";
// Live
const BASE_URL = "https://url-shortner-oaym.onrender.com";

export const axiosIntance = axios.create({
    baseURL: BASE_URL,
})