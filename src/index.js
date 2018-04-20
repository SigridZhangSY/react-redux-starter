import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './redux/reducers';
import { demoSaga } from './redux/sagas/demoSaga';


const sagaMiddleware = createSagaMiddleware()
let middlewares = []
middlewares.push(sagaMiddleware)

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

//enable chrome redux dev tool
const store = createStoreWithMiddleware(reducers, window.devToolsExtension ? window.devToolsExtension() : undefined)

sagaMiddleware.run(demoSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
