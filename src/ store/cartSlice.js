import React from 'react'
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {  //initialState should be an object with an items array property. This is because your reducers are accessing state.items in their logic.
        items: [],
      },
    reducers: {
      add(state, action) {
        state.items.push(action.payload);
      },
      remove(state, action) {
        state.items = state.items.filter(item => item.id !== action.payload);
      },
      increment(state, action) {
        const product = state.items.find(item => item.id === action.payload);
        if (product) {
          product.quantity += 1;
        }
      },
      decrement(state, action) {
        const product = state.items.find(item => item.id === action.payload);
        if (product && product.quantity > 0) {
          product.quantity -= 1;
        }
      },
    },
  });
  

export const { add, remove ,increment,decrement} = cartSlice.actions;
export default cartSlice.reducer;