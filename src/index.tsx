import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'src/Router';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css';
import redux from './store';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware({
  context: {
    history,
  },
});
const store = createStore(redux.rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(redux.rootSagas());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root history={history} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
