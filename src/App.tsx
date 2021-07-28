import { Provider } from 'react-redux';
import Cart from './components/Cart';
import Catalog from './components/Catalog';

import store from './store';
import './styles/global.css'

function App() {
  return (
    <Provider store={store}>
      <Catalog />
      <br />
      <br />
      <Cart />
    </Provider>
  );
}

export default App;
