import {Navigate, Outlet, useLocation} from "react-router-dom";
import {setAuthenticated} from "store/config";
import {logout} from "store/auth";
import {useAppDispatch, useAppSelector, useConfig} from "hooks";


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