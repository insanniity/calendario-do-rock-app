import {createSlice} from "@reduxjs/toolkit";


type ConfigState = {
    loading: boolean,
    authenticated: boolean,
    drawerOpen?: boolean,
    menuAtual?: string,
}


const initialState: ConfigState = {
    loading: false,
    authenticated: false,
    drawerOpen: true,
    menuAtual: 'home',
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
        },
        setMenuAtual: (state, action) => {
            state.menuAtual = action.payload;
        }
    }
})



export default configSlice.reducer;

export const {setMenuAtual, setLoading, setDrawerOpen, setAuthenticated} = configSlice.actions;

