import React from 'react';
import {Provider} from 'react-redux';
import {MainNavigation} from './navigation/main-navigation';
import {store} from './redux/store';
import ErrorBoundary from 'react-native-error-boundary';
import {Text, View} from 'react-native';

const CustomFallback = (props: {error: Error; resetError: Function}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
    <Text>Something happened!</Text>
    <Text>{props.error.toString()}</Text>
  </View>
);

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <MainNavigation />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
