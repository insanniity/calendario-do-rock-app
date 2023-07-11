import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import authReducer from "store/auth";
import configReducer from "store/config";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const authPersistConfig  = {
    key: 'auth',
    storage,
}

const configPersistConfig = {
    key: 'config',
    storage: storage,
    blacklist: ['auth']
}

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig , authReducer),
    config: persistReducer(configPersistConfig , configReducer)
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
}, )

export const persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppState: () => RootState = () => store.getState();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector