import React from 'react'
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client'


import { JournalApp } from './JournalApp.jsx'
import { store } from './store';

import 'animate.css';
import './styles.css'

// Fonts Roboto
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JournalApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
