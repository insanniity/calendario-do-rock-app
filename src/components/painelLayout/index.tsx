import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "store";
import {setAuthenticated, useConfig} from "store/config";
import {logout} from "store/auth";


const PainelLayout = () => {
    const location = useLocation();
    const {authenticated} = useAppSelector(useConfig)
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(setAuthenticated(false));
    }

    if (!authenticated) {
        return <Navigate to="/auth/login" state={{from: location}} replace/>
    }

    return (
        <>
            <button onClick={handleLogout}>Logout</button>
            <Outlet/>
        </>
    )
}


export default PainelLayout