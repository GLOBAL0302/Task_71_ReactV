import { IDishState } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchDishes } from './dishesThunk';

export interface DishesState {
  dishes:IDishState[]
  fetchLoading:boolean
}

const initialState: DishesState = {
  dishes:[],
  fetchLoading:false,
};

export const dishesSlice = createSlice({
  name:"dishes",
  initialState,
  reducers:{},
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
    selectDishes:(state)=> state.dishes
  }
});


export const dishesReducer = dishesSlice.reducer;
export const {selectDishes} = dishesSlice.selectors;