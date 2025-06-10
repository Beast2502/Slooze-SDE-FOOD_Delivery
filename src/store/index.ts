import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cartSlice';
import langReducer from './languange/langSlice';


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        lang : langReducer
    },
});