import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(state.products, "REDUCE")
            if (state.products.filter(data => data.product === action.payload.product).length) {

                state.products = state.products.map(item => item.product === action.payload.product ?
                    { ...item, quantity: item.quantity + 1 } : item)

            } else {

                state.products.push(action.payload)

            }
        },
        reduceFromCart: (state, action) => {
            const productIndex = state.products.findIndex(item => item.product === action.payload.id);

            if (productIndex !== -1) {
                const product = state.products[productIndex];

                if (product.quantity === 1) {
                    state.products.splice(productIndex, 1); // remove item
                } else {
                    product.quantity -= 1; // directly mutate quantity
                }
            }
        },
        removeFromCart: (state, action) => {
            state.products = state.products.filter(item => item.name !== action.payload);
        },
        clearCart: (state) => {
            state.products = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart, reduceFromCart } = cartSlice.actions;
export default cartSlice.reducer;