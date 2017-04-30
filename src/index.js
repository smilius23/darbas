import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';

import routes from './routes';
import configureStore from './store/configureStore';

import './styles/projectStyle.less';

import { getData } from './actions/callApiActions';
import { dribbbleApiTypes } from './actions/actionTypes';


const store = configureStore();

const ApiUrl = 'https://api.dribbble.com/v1/shots?access_token=4b866f453919eda6771f607d0ce40f442a0c7c5e307b40bb0e6344ef288dff03';
store.dispatch(getData(
  ApiUrl,
  dribbbleApiTypes
));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('darbas')
);
