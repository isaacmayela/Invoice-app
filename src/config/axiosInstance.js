import axios from "axios";

const BASE_SERVER_URL = import.meta.env.VITE_BASE_SERVER_URL;

// const storedData = localStorage.getItem('persist:user');

// const userDatas = JSON.parse(storedData)

// const accessToken = storedData.access

// console.log(accessToken);


export const axiosInstance = axios.create({
    baseURL: BASE_SERVER_URL,
    timeout: 5000,
    headers: {
      // Authorization: accessToken ? `Bearer ${accessToken}` : null,
      'Content-Type': 'application/json',
    },
});
