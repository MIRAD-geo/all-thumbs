import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            if (state.items.length) {
                for (item of state.items) {
                    if (state.items[item].name === action.payload.name) {
                        state.items[item].amount++;
                        return;
                    }
                }
            }
            state.items.push(action.payload)
        },
        removeItem: (state, action) 

    }
})