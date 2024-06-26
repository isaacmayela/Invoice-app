import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    value: false,
};
  
export const themeSlice = createSlice({
name: 'themeSlice',
initialState,
reducers: {
    setTheme (state, action) {
        state.value = action.payload;
    },
},
});
  
export const { setTheme } = themeSlice.actions;
  
export default themeSlice.reducer;