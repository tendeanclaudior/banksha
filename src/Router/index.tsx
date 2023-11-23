import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  History,
  Home,
  OnBoarding,
  Reward,
  SecurityCode,
  SignIn,
  SignUp,
  SplashScreen,
  Statistic,
  TopUp,
  TopUpAmount,
  TopUpSuccess,
  Transfer,
  UploadPic,
} from '../Pages';
import {ButtomNavigation} from '../Components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <ButtomNavigation {...props} />}>
      <Tab.Screen
        name="Overview"
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="AddMoney"
        component={TopUp}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Statistic"
        component={Statistic}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Reward"
        component={Reward}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

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
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUp"
        component={TopUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transfer"
        component={Transfer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUpSuccess"
        component={TopUpSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUpAmount"
        component={TopUpAmount}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
