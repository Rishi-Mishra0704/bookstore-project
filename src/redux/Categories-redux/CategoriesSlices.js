import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Under construction',
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
