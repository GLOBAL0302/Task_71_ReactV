import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAllOrders, IDishInput, IDishState, IOrderInfo } from '../types';
import axiosApi from '../axiosApi';
import { RootState } from '../app/store';
import { idID } from '@mui/material/locale';


export const fetchDishes = createAsyncThunk<
  IDishState[],
  void,
  { state: RootState }
>('dishes/fetchDishes', async () => {
  let fetchData: IDishState[] = [];
  const { data: responseData } = await axiosApi.get('/dishes.json');
  if (responseData) {
    fetchData = Object.keys(responseData).map((id) => ({
      id,
      ...responseData[id],
    }));
  }
  return fetchData;
});

export const createDish = createAsyncThunk<
  void,
  IDishInput,
  { state: RootState }
>('dishes/createDish', async (dish: IDishInput) => {
  await axiosApi.post('/dishes.json', dish);
});

export const deleteDishThunk = createAsyncThunk<
  void,
  IDishState,
  { state: RootState }
>('dishes/deleteDish', async (dish) => {
  await axiosApi.delete(`/dishes/${dish.id}.json`);
});

export const editDishThunk = createAsyncThunk<
  void,
  IDishState,
  { state: RootState }
>('dishes/editDish', async (dish) => {
  const changedDish = {
    title: dish.title,
    price: dish.price,
    image: dish.image,
  };
  await axiosApi.put(`/dishes/${dish.id}.json`, changedDish);
});

export const submitOrdersThunks = createAsyncThunk<void, IOrderInfo, {state:RootState}>(
  "dishes/submitOrders",
  async(cartItems)=>{
    await axiosApi.post(`/dishesOrders.json`, cartItems);
  }
);

export const fetchCsOrders = createAsyncThunk<IAllOrders[], void, {state:RootState}>(
  "dishes/fetchCsOrders",
  async()=>{
    const {data} = await axiosApi.get("dishesOrders.json");
    let allOrders =[];
    if(data){
       allOrders = Object.keys(data).map(dishId=>({
        id: dishId,
         items: data[dishId]
      }));
      return allOrders;
    }
  }
);
