import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? (localStorage.getItem('userInfo'))
    : null,
};



// export const fetchData = createAsyncThunk('data/fetchData', async (id) => {
//   // Your data fetching logic goes here
//   const response = await fetch(`http://localhost:5000/api/users/getusers/${id}`);
//   const data = await response.json();
//   return data;
// });
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    editData: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },

});

export const { editData } = userSlice.actions;

export default userSlice.reducer;