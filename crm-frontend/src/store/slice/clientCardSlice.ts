import { IClient } from '../../types/CrmTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getClient } from './actionCreatot';

export interface IClientCard {
  client: IClient | null;
  isLoading: boolean;
  error: string;
}

const initialState: IClientCard = {
  client: null,
  isLoading: false,
  error: '',
};

export const clientCardSlice = createSlice({
  name: 'clientCard',
  initialState,
  reducers: {
    putClientCard: (state, action: PayloadAction<IClient>) => {
      state.client = action.payload;
    },

    removeClientCard: (state) => {
      state.client = null;
    },
  },
  extraReducers: {
    //GET
    [getClient.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [getClient.fulfilled.type]: (state, action: PayloadAction<IClient>) => {
      state.isLoading = false;
      state.error = '';
      state.client = action.payload;
    },
    [getClient.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default clientCardSlice.reducer;
