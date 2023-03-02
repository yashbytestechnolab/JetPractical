import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit';
import { rendomHobby } from '../../services/HobbyGenrate';

export const getData = createAsyncThunk('getData', async (result) => {

  try {
    let response = await fetch(`https://randomuser.me/api/?results=${result?.result}&page=${result?.page}`);

    let data = await response.json().then(async (res) => {
      return {
        ...res, results: res?.results?.map(item => {
          return { ...item, isFavourite: false, hobbies: rendomHobby() };
        })
      };
    });

    let updateRespone =
      result?.myData?.length > 0
        ? { ...data, results: [...result.myData, ...data.results] }
        : data;

    return updateRespone;
  } catch (error) {
    throw (error)
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState: { data: [], loading: false, error: "", faviourateList: [] },
  reducers: {
    onUpdateFavourite: (state, { payload }) => {
      state.data = { ...payload.listOfUser, ...payload.listOfUser.data }
      state.faviourateList = payload.favouriteListOfUser
    },
    getFaviourateList: (state, { payload }) => {
      state.faviourateList = payload
    }
  },
  extraReducers: {
    [getData.pending]: (state, actions) => {
      let { refreshing } = actions?.meta?.arg
      state.loading = true
      refreshing ? state.refreshing = refreshing : state.refreshing = refreshing
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.data = payload
      state.loading = false
      state.refreshing = false
    },
    [getData.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
      state.refreshing = false
    },
  }
})

export const { onUpdateFavourite, getFaviourateList } = userSlice.actions

export default userSlice.reducer
