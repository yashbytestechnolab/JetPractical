import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from 'redux-persist'
import store from './src/redux/store'
import Home from './src/screen/Home';
import MainStack from './src/routes/MainStack';
import { NavigationContainer } from '@react-navigation/native';

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>

  );
};


export default App;