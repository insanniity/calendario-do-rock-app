import {createSlice} from "@reduxjs/toolkit";


type ConfigState = {
    loading: boolean,
    authenticated: boolean,
    drawerOpen?: boolean,
}


const initialState: ConfigState = {
    loading: false,
    authenticated: false,
    drawerOpen: true,
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
        },
        setDrawerOpen: (state, action) => {
            state.drawerOpen = action.payload;
        }
    }
})



export default configSlice.reducer;

export const {setLoading, setDrawerOpen, setAuthenticated} = configSlice.actions;

