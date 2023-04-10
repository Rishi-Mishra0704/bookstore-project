import { createSlice } from '@reduxjs/toolkit';

// Define the slice of state for categories
const categoriesSlice = createSlice({
  name: 'categories',
  initialState: { categories: ['Under construction'] },
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

// Export the reducers for use in the store
export const { checkStatus } = categoriesSlice.actions;

// Export the slice of state for use in the store
export const categoriesReducer = categoriesSlice.reducer;
