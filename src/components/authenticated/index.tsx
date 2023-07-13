import {ReactNode, useEffect} from "react";
import {setAuthenticated} from "store/config";
import {useAppDispatch, useAppSelector, useAuth} from "hooks";


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