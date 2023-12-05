import React, {useEffect} from 'react';
import {addEventListener} from '@react-native-community/netinfo';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {Loading, NetWork} from './Components';
import {isConnectedService} from './Redux/Action';
import store from './Redux/store';
import Router from './Router';

const MainApp = () => {
  const dispatch = useDispatch();
  const {isLoading, isConnected} = useSelector(state => state.globalReducer);

  useEffect(() => {
    const unsubscribe = addEventListener(state => {
      dispatch(isConnectedService(state.isConnected));
    });

    return () => unsubscribe();
  }, [isConnected]);

  if (!isConnected) {
    return <NetWork />;
  }

  return (
    <NavigationContainer>
      <Router />
      {isLoading && <Loading />}
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
