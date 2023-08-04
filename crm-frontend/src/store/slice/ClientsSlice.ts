import { IClient, IClientState } from '../../types/CrmTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getClients } from './actionCreatot';

type TPayloadAction = 'id' | 'surname' | 'createdAt' | 'updatedAt';

const initialState: IClientState = {
  allPages: 0,
  activePage: 0,
  allClients: [],
  clients: [],
  isLoading: true,
  error: '',
};

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    clietToAscending(state, action: PayloadAction<TPayloadAction>) {
      state.allClients = state.clients.sort((a, b) => {
        if (a[action.payload] > b[action.payload]) {
          return -1;
        } else {
          return 1;
        }
      });

      const start = 5 * (state.activePage - 1);
      const end = 5 * state.activePage;

      state.clients = state.allClients.slice(start, end);
    },

    clietToDescending(state, action: PayloadAction<TPayloadAction>) {
      state.allClients = state.clients.sort((a, b) => {
        if (a[action.payload] > b[action.payload]) {
          return 1;
        } else {
          return -1;
        }
      });

      const start = 5 * (state.activePage - 1);
      const end = 5 * state.activePage;

      state.clients = state.allClients.slice(start, end);
    },

    setActivePage(state, action: PayloadAction<number>) {
      state.activePage = action.payload;

      const start = 5 * (state.activePage - 1);
      const end = 5 * state.activePage;

      state.clients = state.allClients.slice(start, end);
    },
  },
  extraReducers: {
    //GET
    [getClients.pending.type]: (state) => {
      state.isLoading = true;
      state.error = '';
    },
    [getClients.fulfilled.type]: (state, action: PayloadAction<IClient[]>) => {
      state.isLoading = false;
      state.error = '';
      state.allClients = action.payload;
      state.allPages = Math.ceil(action.payload.length / 5);

      if (state.activePage !== 0) {
        const start = 5 * (state.activePage - 1);
        const end = 5 * state.activePage;

        state.clients = state.allClients.slice(start, end);
      }
    },
    [getClients.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default clientSlice.reducer;
