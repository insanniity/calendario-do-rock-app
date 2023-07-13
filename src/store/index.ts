import {combineReducers, configureStore} from '@reduxjs/toolkit'
import authReducer from "store/auth";
import configReducer from "store/config";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';
import AuthApi from "services/api/auth";

const authPersistConfig  = {
    key: 'auth',
    storage,
    blacklist: ['config']
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
    devTools: true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            thunk: {}
        })
}, )

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;