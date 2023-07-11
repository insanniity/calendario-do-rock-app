import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "store/index.ts";


type ConfigState = {
    loading: boolean,
    authenticated: boolean,
}


const initialState: ConfigState = {
    loading: false,
    authenticated: false,
}



export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setAuthenticated: (state, action) => {
            state.authenticated = action.payload;
        }
    }
})



export default configSlice.reducer;

export const {setLoading, setAuthenticated} = configSlice.actions;

export const useConfig = (state: RootState) => state.config;