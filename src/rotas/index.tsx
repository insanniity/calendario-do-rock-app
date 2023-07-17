import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "pages/auth/login";
import HomePage from "pages/painel/home";
import AuthLayout from "components/authLayout";
import PainelLayout from "components/painelLayout";
import ListUsuarios from "pages/painel/usuarios/list";



const Rotas = () => {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Navigate to="/auth/login" />}/>
                <Route path="login" element={<Navigate to="/auth/login" />}/>
                <Route path="auth"  element={<AuthLayout />}>
                    <Route index element={<Navigate to="/auth/login" />}/>
                    <Route path="login" element={<LoginPage/>}/>
                </Route>
                <Route path="painel" element={<PainelLayout />}>
                    <Route index element={<HomePage />}/>
                    <Route path="usuarios" >
                        <Route index element={<ListUsuarios />} />
                    {/*    <Route path="add" element={<AddUsuario />} />
                        <Route path="edit" element={<Navigate to={'/painel/usuarios'}/>} />
                        <Route path="edit/:id" element={<EditUsuario />} />*/}
                    </Route>
                </Route>
            </Route>
        </Routes>
    )
}

export default Rotas;