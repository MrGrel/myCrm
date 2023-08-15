import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IModalState, IOpenModalPayLoad } from '../../types/CrmTypes';
import { postClient, patchClient, deleteClient } from './actionCreatotApi';

const initialState: IModalState = {
  client: null,
  isOpenModal: false,
  isOpenModalSubmit: false,
  modalIsLoading: false,
  isReloadTable: false,
  isRemove: false,
  error: '',
};

export const modalSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    openModal(state, action: PayloadAction<IOpenModalPayLoad>) {
      state.client = action.payload.client;
      if (action.payload.isSubmiting) {
        state.isOpenModalSubmit = true;
      } else {
        state.isOpenModal = true;
      }
    },
    closeAllModal(state) {
      state.client = null;
      state.isOpenModal = false;
      state.isOpenModalSubmit = false;
    },
    closeSubmitModal(state) {
      state.isOpenModalSubmit = false;
    },
    removed(state) {
      state.isRemove = false;
    },
  },
  extraReducers: {
    //POST
    [postClient.pending.type]: (state) => {
      state.modalIsLoading = true;
      state.error = '';
    },
    [postClient.fulfilled.type]: (state) => {
      state.modalIsLoading = false;
      state.error = '';
      state.isOpenModal = false;
      state.isOpenModalSubmit = false;
      state.isReloadTable = !state.isReloadTable;
    },
    [postClient.rejected.type]: (state, action: PayloadAction<string>) => {
      state.modalIsLoading = false;
      state.error = action.payload;
    },

    //PATCH
    [patchClient.pending.type]: (state) => {
      state.modalIsLoading = true;
      state.error = '';
    },
    [patchClient.fulfilled.type]: (state) => {
      state.modalIsLoading = false;
      state.error = '';
      state.isOpenModal = false;
      state.isOpenModalSubmit = false;
      state.isReloadTable = !state.isReloadTable;
    },
    [patchClient.rejected.type]: (state, action: PayloadAction<string>) => {
      state.modalIsLoading = false;
      state.error = action.payload;
    },

    //DELETE
    [deleteClient.pending.type]: (state) => {
      state.modalIsLoading = true;
      state.error = '';
      state.isRemove = false;
    },
    [deleteClient.fulfilled.type]: (state) => {
      state.modalIsLoading = false;
      state.error = '';
      state.isOpenModal = false;
      state.isOpenModalSubmit = false;
      state.isReloadTable = !state.isReloadTable;
      state.isRemove = !state.isRemove;
    },
    [deleteClient.rejected.type]: (state, action: PayloadAction<string>) => {
      state.modalIsLoading = false;
      state.error = action.payload;
    },
  },
});

export default modalSlice.reducer;
