import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // app関数を読み込み
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import Message from './components/Message';
import Page from './components/ContainerSample';
import Counter from './components/UseStateSample';
import { Parent } from './components/ButtonSample';

const root = ReactDOM.createRoot(
  // index.htmlにあるrootをIDに持つ要素を指定している
  document.getElementById('root') as HTMLElement
);
root.render(
  // <h1>見出し</h1>
  // 描画するJSXタグを指定している
  <React.StrictMode>
    <Parent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
