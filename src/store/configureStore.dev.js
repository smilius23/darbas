import { compose, createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from '../reducers';

const finalCreateStore = compose(
  applyMiddleware(thunkMiddleware, apiMiddleware, reduxImmutableStateInvariant(), logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const configureStore = () => {
  const store = finalCreateStore(rootReducer);
  return store;
}

export default configureStore;
