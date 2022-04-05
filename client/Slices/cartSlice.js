import { createSlice, current } from '@reduxjs/toolkit'

// const initialState = {
//     items: [],
//     amount: 0
// }

export const cartSlice = createSlice({
    name: 'cart',
    initialState : {
        items: [],
        amount: 0
    },
    reducers: {
        checkOut:(state) => {
            initialState
        },
        addItem: (state, action) => {
            if (state.items.length > 0) {
                for (item of state.items) {
                    if (state.items[item].name === action.payload.name) {
                        state.items[item].amount++;
                        return;
                    }
                }
            }
            state.amount++
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload,1)
        },
        updateQuantity:(state, action) => {
            state.items[action.payload.id].quantity = action.payload.newQuantity;
        },
    }
})

export const { checkOut, addItem, removeItem, updateQuantity } = cartSlice.actions

export default cartSlice.reducer