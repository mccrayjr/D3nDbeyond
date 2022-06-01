import React from 'react';
import ReactDOM from 'react-dom';
import { StateProvider } from './Provider';
import { Form } from './Form';
import { Cards } from './Cards';
import { CharacterBox } from './CharacterBox';
import './index.css';
import reportWebVitals from './reportWebVitals';

//StateProvider passes our stateful data down to all of our child components
ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <CharacterBox />
      <Form />
      <Cards />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
