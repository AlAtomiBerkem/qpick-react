import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cardSlice';
import basketReducer from './basketSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    basket: basketReducer,
  },
});
