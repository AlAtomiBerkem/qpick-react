import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemCount: 0,
  },
  reducers: {
    incrementItemCount: (state) => {
      state.itemCount += 1;
    },
  },
});

export const { incrementItemCount } = cartSlice.actions;

export default cartSlice.reducer;
