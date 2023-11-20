import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnBoarding,
  SecurityCode,
  SignIn,
  SignUp,
  SplashScreen,
  UploadPic,
} from '../Pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPic"
        component={UploadPic}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SecurityCode"
        component={SecurityCode}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
