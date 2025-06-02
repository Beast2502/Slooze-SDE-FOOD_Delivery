import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.products = action.payload;
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.products = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;