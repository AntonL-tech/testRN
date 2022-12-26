import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import swapiService from '../services/service';
const swapi = new swapiService();
export const getList = createAsyncThunk('reducerList/getList', async () => {
  const response = await swapi.getAllPeople().then(res => res);
  return response;
});
export const getListItem = createAsyncThunk(
  'reducerList/getListItem',
  async id => {
    const response = await swapi.getPerson(id).then(res => res);
    return response;
  },
);
const reducerList = createSlice({
  name: 'reducerList',
  initialState: {
    loading: false,
    error: false,
    persons: [],
    currentId: 1,
    person: [],
  },
  reducers: {
    changeCurrentId: (state, action) => {
      state.currentId = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getList.pending, state => {
      state.loading = true;
    });
    builder.addCase(getList.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      state.persons = action.payload;
      state.loading = false;
    });
    builder.addCase(getListItem.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getListItem.fulfilled, (state, action) => {
      state.person = action.payload;
      state.loading = false;
    });
  },
});
export default reducerList.reducer;
export const {changeCurrentId} = reducerList.actions;
