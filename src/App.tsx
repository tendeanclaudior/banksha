import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import {Provider, useSelector} from 'react-redux';
import store from './Redux/store';
import {Loading} from './Components';

const MainApp = () => {
  const loading = useSelector(state => state.globalReducer.isLoading);

  return (
    <NavigationContainer>
      <Router />
      {loading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
