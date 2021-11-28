import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/slices';
import { contactReducer } from '../redux/contacts/reducer';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
  
const authPersistConfig = {
    key: 'authToken',
    storage,
    whiteList: ['token'],
    blacklist: ['error']
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
    reducer: {
        auth: authPersistReducer,
        contacts: contactReducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }  
    })
});

export const persistor = persistStore(store);