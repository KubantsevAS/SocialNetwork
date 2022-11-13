import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  {id : 1, name: 'Leo'},
  {id : 2, name: 'Vasily'},
  {id : 3, name: 'Gotfried'},
  {id : 4, name: 'Mark'},
  {id : 5, name: 'Gasdro'},
  {id : 6, name: 'Rodri'}
];

let messagesData = [
  {id : 1, message : 'Hey'},
  {id : 2, message : 'Hello'},
  {id : 3, message : 'And that how it started'},
  {id : 4, message : 'Anyway what it takes'},
];

let postsData = [
  {id : 1, message: 'Hi, how are you?', number : 20},
  {id : 2, message: "It's my first post", number : 15},
  {id : 3, message: "Let's go!", number : 32},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


