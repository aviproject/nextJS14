"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

export interface homeProps{
  value:number
}
const initialState:homeProps = {
  value: 0,
};


export const HomeSlice = createSlice({
  
    name:'homeSlice',
    initialState,
    reducers: {
        increment: (state) => {
          state.value += 1;
        },
        decrement: (state) => {
          state.value -= 1;
        },
        reset: (state) => {
          state.value = 0;
        },
      },

});

export const { increment, decrement, reset } = HomeSlice.actions

export default HomeSlice.reducer;
