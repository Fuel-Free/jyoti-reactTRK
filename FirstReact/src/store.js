import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import apiSlice from './Slices/apiSlice';
import userReducer from './Slices/userSlice'

export const Store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
       user: userReducer
},
middleware :(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})