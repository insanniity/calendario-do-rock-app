import {Container} from "@mui/material";
import Copyright from "components/copyright";
import {Outlet} from "react-router-dom";


const PainelLayout = () => {
    return (
        <Container component="main" maxWidth="xs" sx={{height: '100vh', alignItems: "center", display: "flex",  flexDirection: 'column', justifyContent: "center"}}>
            <Outlet />
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    )
}


export default PainelLayout