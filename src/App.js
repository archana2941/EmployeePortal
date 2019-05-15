import React, {Component} from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import EmployeePortal from './EmployeePortal';

const { store } = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <EmployeePortal/>
      </Provider>
    );
  }
}
export default App;