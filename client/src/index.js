import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import entryReducer from "./redux/reducers/entryReducer"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { Provider } from 'react-redux';
import authReducer from "./redux/reducers/authReducer"


const reducer = combineReducers({
  entries: entryReducer,
  user: authReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}><App /></Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


