import {createSlice} from "@reduxjs/toolkit";


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

