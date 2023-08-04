import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import { setupStore } from './store/store';
import { Provider } from 'react-redux';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
