import { createStore, compose } from 'redux';
import reducer from './reducers'
import {
  Action,
} from './interfaces';

const stringEnhancer = (createStore: any) => (...args: any) => {
  const store = createStore(...args);
  const originalDispatch = store.dispatch;
  store.dispatch = (action: Action | string) => {
    if (typeof action === 'string') {
      return originalDispatch({
        type: action
      });
    }
    return originalDispatch(action);
  };
  return store;
};

const logEnhancer = (createStore: any) => (...args: any) => {
  const store = createStore(...args);
  const originalDispatch = store.dispatch;
  store.dispatch = (action: Action) => {
    console.log(action.type);

    return originalDispatch(action);
  };
  return store;
};

const store = createStore(reducer, compose(stringEnhancer, logEnhancer));

export default store;