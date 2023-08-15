import { combineReducers, configureStore } from '@reduxjs/toolkit';
import clientCardReducer from './slice/clientCard.slice';
import searchClient from './slice/searchClient.slice';
import clientReducer from './slice/clients.slice';
import modalReducer from './slice/modal.slice';

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
