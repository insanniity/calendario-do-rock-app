import { Navigate, Route, Routes } from "react-router-dom";
import PainelLayout from "components/authLayout";
import Login from "pages/auth/login";



const Rotas = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Navigate to="/auth/login" />}/>
                <Route path="login" element={<Navigate to="/auth/login" />}/>
                <Route path="auth"  element={<PainelLayout />}>
                    <Route index element={<Navigate to="/auth/login" />}/>
                    <Route path="login" element={<Login/>}/>
                </Route>
            </Route>
        </Routes>
    )
}

export default Rotas;