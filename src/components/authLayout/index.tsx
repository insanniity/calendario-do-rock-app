import {Container} from "@mui/material";
import Copyright from "components/copyright";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useAppSelector, useConfig} from "hooks";


const AuthLayout = () => {
    const {authenticated} = useAppSelector(useConfig)
    const location = useLocation();
    const state = location?.state;
    const fromLocation = state?.from?.pathname ? state.from.pathname : "/painel";

    if(authenticated){
        return <Navigate to={fromLocation} replace />
    }


    return (
        <Container component="main" maxWidth="xs" sx={{height: '100vh', alignItems: "center", display: "flex",  flexDirection: 'column', justifyContent: "center"}}>
            <Outlet />
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}


export default AuthLayout