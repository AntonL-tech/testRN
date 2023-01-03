import swapiService from '../../services/service';
import {createAsyncThunk} from '@reduxjs/toolkit';

const swapi = new swapiService();

export const getList = createAsyncThunk('reducerList/getList', async () => {
  const response = await swapi.getAllPeople().then(res => res);
  return response;
});

export const getListItem = createAsyncThunk(
  'reducerList/getListItem',
  async (id: string) => {
    const response = await swapi.getPerson(id).then(res => res);
    return response;
  },
);
