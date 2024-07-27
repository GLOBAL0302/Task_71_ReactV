import { IAllOrders, ICartDishes, IDishState } from '../types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchCsOrders, fetchDishes, submitOrdersThunks } from './dishesThunk';

export interface DishesState {
  dishes: IDishState[];
  checkOutDishes: ICartDishes[];
  allOrders: IAllOrders[];
  fetchLoading: boolean;
}

const initialState: DishesState = {
  dishes: [],
  checkOutDishes: [],
  allOrders: [],
  fetchLoading: false,
};

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const index = state.checkOutDishes.findIndex(
        (item) => item.dish.id === payload.id,
      );
      if (index !== -1) {
        state.checkOutDishes[index].amount++;
      } else {
        state.checkOutDishes.push({
          amount: 1,
          dish: payload,
        });
      }
    },

    deleteFromCart:(state,{payload}, )=>{
      state.checkOutDishes = state.checkOutDishes.filter((item) => item.dish.id == payload.id);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.fetchLoading = true;
      })
      .addCase(fetchDishes.fulfilled, (state, { payload }) => {
        state.dishes = payload;
        state.fetchLoading = false;
      });

    builder
      .addCase(submitOrdersThunks.pending, (state) => {})
      .addCase(submitOrdersThunks.fulfilled, (state) => {
        state.checkOutDishes = [];
      });

    builder
      .addCase(fetchCsOrders.pending, (state, { payload }) => {})
      .addCase(fetchCsOrders.fulfilled, (state, { payload }) => {
        state.allOrders = payload;
      });
  },
  selectors: {
    selectDishes: (state) => state.dishes,
    selectCheckOutDishes: (state) => state.checkOutDishes,
    selectAllOrders: (state) => state.allOrders,
  },
});

export const dishesReducer = dishesSlice.reducer;
export const { addToCart, deleteFromCart } = dishesSlice.actions;
export const { selectDishes, selectCheckOutDishes, selectAllOrders } =
  dishesSlice.selectors;
