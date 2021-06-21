// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import reportWebVitals from '#/config/reportWebVitals';
import {makeStore} from '#/main/store/make-store';
import Router from '#/main/router/router';

ReactDOM.render(
    <React.StrictMode>
      <Provider store={makeStore()}>
        <Router />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
