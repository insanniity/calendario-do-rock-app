import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import authReducer from "store/auth";
import configReducer from "store/config";

const rootReducer = combineReducers({
    auth: authReducer,
    config: configReducer
})


export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
}, )

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppState: () => RootState = () => store.getState()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector