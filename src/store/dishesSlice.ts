import { IDishState } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchDishes } from './dishesThunk';

export interface DishesState {
  dishes:IDishState[]
  checkOutDishes: IDishState[]
  fetchLoading:boolean
}

const initialState: DishesState = {
  dishes:[],
  checkOutDishes:[],
  fetchLoading:false,
};

export const dishesSlice = createSlice({
  name:"dishes",
  initialState,
  reducers:{
    addToCart: (state,{payload})=>{
      state.checkOutDishes.push(payload);
    }
  },
  extraReducers:(builder)=>{
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchDishes.fulfilled, (state, {payload}) =>{
       state.dishes = payload;
       state.fetchLoading = false;
      });
  },
  selectors:{
    selectDishes:(state)=> state.dishes,
    selectCheckOutDishes: (state)=> state.checkOutDishes
  }
});


export const dishesReducer = dishesSlice.reducer;
export const {addToCart}= dishesSlice.actions;
export const {selectDishes, selectCheckOutDishes} = dishesSlice.selectors;