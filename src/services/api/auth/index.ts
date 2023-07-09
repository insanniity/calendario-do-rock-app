import {AuthResponse} from "types/auth";
import {CLIENT_ID, CLIENT_SECRET} from "utils/constants";
import axiosInstance from "services/api/axios";
import {AxiosResponse} from "axios";


const AuthApi = {
    login: async (username: string, password: string): Promise<AuthResponse> => {
        try {
            const headers = {
                'Content-type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
            }
            
            const data = {
                username: username,
                password: password,
                grant_type: 'password',
            }

            const res: AxiosResponse<AuthResponse> = await axiosInstance.post(`/oauth2/token`, data, {headers});
            return res.data;
        } catch (error: any) {
            // console.log(error.data.message);
            throw "Login failed";
        }
    }
}

export default AuthApi;