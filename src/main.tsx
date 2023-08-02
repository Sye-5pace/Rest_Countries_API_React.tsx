import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App.tsx'
import './index.css'
import store from './Store/Store.ts'

const rootElement =document.getElementById('root');

const root = (ReactDOM as any).createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
