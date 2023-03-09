import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import Todos from './Todos';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <h1>Hello World!</h1>
       <Todos/>
      </div>
    </Provider>
  );
}

export default App;
