import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDishInput, IDishState } from '../types';
import axiosApi from '../axiosApi';
import { RootState } from '../app/store';

export const fetchDishes = createAsyncThunk<IDishState[], void, {state:RootState}>(
  "dishes/fetchDishes",
  async ()=>{
    let fetchData:IDishState[] = [];
    const {data:responseData} =  await axiosApi.get('/dishes.json');
    if(responseData){
      fetchData = Object.keys(responseData).map((id)=>({
        id,
        ...responseData[id]
      }));
    }
    return fetchData;
  }
);


export const createDish = createAsyncThunk<void,IDishInput, {state:RootState}>(
  "dishes/createDish",
  async(dish:IDishInput)=>{
    await axiosApi.post("/dishes.json", dish);
  }
);

export const deleteDishThunk = createAsyncThunk<void, IDishState, {state:RootState}>(
  "dishes/deleteDish",
  async(dish)=>{
    await axiosApi.delete(`/dishes/${dish.id}.json`);
  }
);