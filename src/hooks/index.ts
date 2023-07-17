import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState, store} from "store";


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppState: () => RootState = () => store.getState();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


export const useAuth = (state: RootState) => state.auth;
export const useConfig = (state: RootState) => state.config;
