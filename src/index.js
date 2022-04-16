import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from './Redux/store'



let rerenderEntireTree = (state) => {



  ReactDOM.render(
    <React.StrictMode>
      
      <App store={store}/>
  
    </React.StrictMode>,
    document.getElementById('root')
  );

}
rerenderEntireTree(store.getState())

store.subscribe( () => {

  let state = store.getState()

  rerenderEntireTree(state)
})


// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
