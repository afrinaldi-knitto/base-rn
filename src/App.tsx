import React from 'react';
import {Provider} from 'react-redux';
import {MainRouter} from './lib/router/mainRouter';
import {store} from './redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
}

export default App;
