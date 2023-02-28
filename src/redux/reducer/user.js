import { createSlice, createAsyncThunk, unwrapResult } from '@reduxjs/toolkit';



export const getData = createAsyncThunk('getData', async (param) => {
  try {
    let response = await fetch('https://randomuser.me/api/?results=10');
    let data = await response.json();
    return data;
  } catch (error) {
    throw (error)
  }
})



export const userSlice = createSlice({
  name: 'user',
  initialState: { data: [], loading: false, error: "" },
  reducers: {
    // onGetDeviceToken: (state, { payload }) => {
    //   state.data = payload
    // }
  },
  extraReducers: {
    [getData.pending]: (state, { payload }) => {
      state.loading = true
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.data = payload
      state.loading = false
    },
    [getData.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  }
})

// export const { onGetDeviceToken, logout, deleteAccountReason, onsetPassword, onGetRouteNavigationData, handleNotificationBadge } = userSlice.actions

export default userSlice.reducer
