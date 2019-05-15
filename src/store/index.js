import {createStore} from 'redux';
import reducers from './reducer';

const store = createStore(reducers);
const configureStore = () => ({ store });

export default configureStore;