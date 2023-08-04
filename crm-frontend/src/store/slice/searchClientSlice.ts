import { IClient } from '../../types/CrmTypes';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ISearch {
  client: IClient | null;
  isModalSearchOpen: boolean;
}

const initialState: ISearch = {
  client: null,
  isModalSearchOpen: false,
};

export const searchClientSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearSearch(state) {
      state.client = null;
      state.isModalSearchOpen = false;
    },
    openModal(state, action: PayloadAction<IClient>) {
      state.client = action.payload;
      state.isModalSearchOpen = true;
    },
    closeModal(state) {
      state.client = null;
      state.isModalSearchOpen = false;
    },
  },
});

export default searchClientSlice.reducer;
