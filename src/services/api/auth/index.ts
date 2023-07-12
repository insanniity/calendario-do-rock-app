import {createAsyncThunk} from "@reduxjs/toolkit";
import {CLIENT_ID, CLIENT_SECRET} from "utils/constants";
import {AxiosResponse} from "axios";
import {AuthResponse} from "types/auth";
import axiosInstance from "services/api/axios";
import {setAuthenticated} from "store/config";


const AuthApi = {
    login: createAsyncThunk(
        'auth/login',
        async (data:{username: string, password: string}, thunkAPI) => {
            try {
                const headers = {
                    'Content-type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
                }
                const body = {
                    password: data.password,
                    username: data.username,
                    grant_type: 'password',
                }
                const res: AxiosResponse<AuthResponse> = await axiosInstance.post(`/oauth2/token`, body, {headers});
                thunkAPI.dispatch(setAuthenticated(true));
                return res.data;
                // fulfillWithValue(res.data);
            }catch (error: any) {
                return thunkAPI.rejectWithValue(error.data.message);
            }
        }
    )

    // login: async (username: string, password: string): Promise<AuthResponse> => {
    //     try {
    //         const headers = {
    //             'Content-type': 'application/x-www-form-urlencoded',
    //             'Authorization': 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
    //         }
    //
    //         const data = {
    //             username: username,
    //             password: password,
    //             grant_type: 'password',
    //         }
    //
    //         const res: AxiosResponse<AuthResponse> = await axiosInstance.post(`/oauth2/token`, data, {headers});
    //         return res.data;
    //     } catch (error: any) {
    //         // console.log(error.data.message);
    //         throw "Login failed";
    //     }
    // }
}

export default AuthApi;