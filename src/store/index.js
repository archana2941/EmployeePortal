import {applyMiddleware,createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducer';

const middlewares = [thunkMiddleware];
const store = createStore(
    reducers,
    applyMiddleware(...middlewares),
  );;
const configureStore = () => ({ store });

export default configureStore;