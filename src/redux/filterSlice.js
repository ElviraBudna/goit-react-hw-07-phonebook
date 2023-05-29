import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterChange(state, action) {
      return (state = action.payload.toLowerCase());
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterChange } = filterSlice.actions;
