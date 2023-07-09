import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "store/index.ts";


const initialState = {
    loading: false,
    error: null,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: () => {

    },
})

export default authSlice.reducer;

export const {} = authSlice.actions;

export const useAuth = (state:RootState) =>  state.auth;