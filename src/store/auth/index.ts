import {createSlice} from "@reduxjs/toolkit";
import AuthApi from "services/api/auth";
import jwtDecode from "jwt-decode";
import {AuthData} from "types/auth";
import {RootState} from "store";

type AuthState = {
    loading: boolean,
    error: string | null,
    access_token?: string,
    expires_in?: number,
    token_type?: string,
    exp?: number,
    authorities?: string[],
    username?: string,
}

const initialState: AuthState = {
    loading: false,
    error: null,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(AuthApi.login.fulfilled, (state, action) => {
                const {access_token, expires_in, token_type} = action.payload;
                const {exp, authorities, username}: AuthData = jwtDecode(access_token) as AuthData;
                state.loading = false;
                state.error = null;
                state.access_token = access_token;
                state.expires_in = expires_in;
                state.token_type = token_type;
                state.exp = exp;
                state.authorities = authorities;
                state.username = username;
            })
            .addCase(AuthApi.login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? JSON.stringify(action.payload) : "Oops! Something went wrong";
            })
            .addCase(AuthApi.login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })

    },
})

export default authSlice.reducer;

export const {logout} = authSlice.actions;


export const hasAnyAuthority = (state:RootState , authorities?: string[]): boolean => {
    const requiredAuthorities = state.auth.authorities;
    if (!requiredAuthorities) {
        return false;
    }
    if (!authorities) {
        return true;
    }
    return requiredAuthorities.some(requiredAuthority => authorities.includes(requiredAuthority));
}