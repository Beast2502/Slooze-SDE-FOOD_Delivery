import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    language: 'en'
}
export const langSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        handleLangChange: (state, action) => {

            state.language = action.payload
        },

    },
});

export const { handleLangChange } = langSlice.actions;
export default langSlice.reducer;