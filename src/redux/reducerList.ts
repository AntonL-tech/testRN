import {createSlice} from '@reduxjs/toolkit';
import {IPersons} from '../redux/models/IPersons';
import {getList, getListItem} from './asyncReducers/asyncReducers';
interface AppState {
  loading: boolean;
  error: unknown;
  currentId: string;
  person: PersonProps;
  persons: IPersons[];
}
const initialState: AppState = {
  loading: false,
  error: false,
  persons: [],
  currentId: '1',
  person: {
    id: '',
    name: '',
    gender: '',
    birthYear: '',
    eyeColor: '',
    height: '',
    mass: '',
    skinColor: '',
  },
};
const reducerList = createSlice({
  name: 'reducerList',
  initialState,
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
