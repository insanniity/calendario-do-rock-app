import {ReactNode, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "store";
import {useAuth} from "store/auth";
import {setAuthenticated} from "store/config";


type Props = {
    children: ReactNode
}

const Authenticated = ({children}: Props) => {
    const { exp} = useAppSelector(useAuth);
    const appDispatch = useAppDispatch();

    useEffect(() => {
        if (exp) {
            if((exp * 1000) > Date.now()) {
                appDispatch(setAuthenticated(true));
            }else{
                appDispatch(setAuthenticated(false));
            }
        }else{
            appDispatch(setAuthenticated(false));
        }
    }, [appDispatch, exp]);

    return children;
}

export default Authenticated;