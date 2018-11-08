/* global window  document */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './index.less';
import stores from 'stores/index'
import App from './App';
import * as serviceWorker from './serviceWorker';

/* eslint-disable */
(function (doc, win) {
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      document.getElementsByTagName('html')[0].style.fontSize = `${window.innerWidth / 10}px`;
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
}(document, window));
/* eslint-enable */

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
