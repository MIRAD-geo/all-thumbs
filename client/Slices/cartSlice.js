import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        checkOut:(state, action) => {
            return initialState
        },
        addItem: (state, action) => {
            if (state.items.length > 0) {
                for (let i = 0; i < state.items.length; i++) {
                    if (state.items[i].name === action.payload.name) {
                        state.items[i].amount++;
                        return;
                    }
                }
            }
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload, 1)
        },
        updateQuantity:(state, action) => {
            state.items[action.payload.id].quantity = action.payload.newQuantity;
        },
    }
})

export const { checkOut, addItem, removeItem, updateQuantity } = cartSlice.actions

export default cartSlice.reducer