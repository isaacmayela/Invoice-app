import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    userData: null,
    isAuthenticated: false,
    token: ""
};
  
export const userSlice = createSlice({
name: 'userSlice',
initialState,
reducers: {
    setUserData: (state, action) => {
        state.userData = action.payload;
        state.isAuthenticated = true;
    },

    setToken: (state, action) => {
        state.token = action.payload
    },
  
    logout: (state, action) => {
        state.isAuthenticated = false;
        state.token = ""
        state.userData = null
    },
},
});
  
export const { setUserData, setToken, logout } = userSlice.actions;
  
export default userSlice.reducer;