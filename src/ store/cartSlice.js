import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
            //return , will retun new State , Beacuse WE cant directly perform CRUD in Direct State/Defined AT top
        },
    }
})


export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;