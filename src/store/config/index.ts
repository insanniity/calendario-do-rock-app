import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "store/index.ts";


type ConfigState = {
    loading: boolean,
}


const initialState: ConfigState = {
    loading: false,
}



export const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    }
})



export default configSlice.reducer;

export const {setLoading} = configSlice.actions;

export const useConfig = (state: RootState) => state.config;