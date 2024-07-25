import { IDishState } from '../types';
import { createSlice } from '@reduxjs/toolkit';

export interface DishesState {
  dishes:IDishState[]
  fetchLoading:boolean
}

const initialState: DishesState = {
  dishes:[],
  fetchLoading:false,
};

export const dishesSlcie = createSlice({
  name:"dishes",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{

  }
});


export const dishesReducer = dishesSlcie.reducer;