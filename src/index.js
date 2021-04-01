import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store/store";
import Provider from "react-redux/es/components/Provider";

let rerenderReactDOM =(state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={state}>
        <App props={state.getState()} />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  reportWebVitals();
}

rerenderReactDOM(store);
store.subscribe(()=>{rerenderReactDOM(store)})

