import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDishInput } from '../types';
import axiosApi from '../axiosApi';
import { RootState } from '../app/store';


export const createDish = createAsyncThunk<void,IDishInput, {state:RootState}>(
  "dishes/createDish",
  async(dish:IDishInput)=>{
    await axiosApi.post("/dishes.json", dish);
  }
);