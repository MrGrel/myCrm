import { combineReducers, configureStore } from '@reduxjs/toolkit';
import clientCardReducer from './slice/clientCardSlice';
import searchClient from './slice/searchClientSlice';
import clientReducer from './slice/ClientsSlice';
import modalReducer from './slice/ModalSlice';

const rootReducer = combineReducers({
  clientCardReducer,
  clientReducer,
  searchClient,
  modalReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type rootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
