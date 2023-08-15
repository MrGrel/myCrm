import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  gettingClients,
  gettingClient,
  postingClient,
  patchingClient,
  deletingClient,
  searchingClient,
} from '../../api/apiClients';
import { IFetchData, ISearchClient } from '../../types/CrmTypes';

export const getClients = createAsyncThunk('client/getClients', async (_, thunkApi) => {
  try {
    return await gettingClients();
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const getClient = createAsyncThunk('clientCard/getClient', async (id: string, thunkApi) => {
  try {
    return await gettingClient(id);
  } catch (error: any) {
    return thunkApi.rejectWithValue(String(error.message));
  }
});

export const postClient = createAsyncThunk('modal/postClients', async (client: IFetchData, thunkApi) => {
  try {
    return await postingClient(client);
  } catch (error: any) {
    return thunkApi.rejectWithValue(String(error.message));
  }
});

export const patchClient = createAsyncThunk('modal/patchClients', async (client: IFetchData, thunkApi) => {
  try {
    return await patchingClient(client);
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteClient = createAsyncThunk('modal/deleteClients', async (id: string, thunkApi) => {
  try {
    return await deletingClient(id);
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});
