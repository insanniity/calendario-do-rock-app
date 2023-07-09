import axios from "axios";
import {URL_BASE} from "utils/constants";

const axiosInstance = axios.create({baseURL: URL_BASE});

axiosInstance.interceptors.request.use((config) => {
    // if(config.url === '/auth/token' || config.url === '/auth/refresh' || (config.method === 'get' && config.url === "/events/all")) {
    //     return config;
    // }
    //
    //
    // const lsData = localStorage.getItem(AUTH_KEY);
    // const authData = lsData ? JSON.parse(lsData) : null;
    // if (authData) {
    //     config.headers['Authorization'] = `Bearer ${authData.access_token}`;
    // }
    return config;
});


export default axiosInstance;