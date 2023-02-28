import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from './RoutesName/RoutesName';
import {TabNavigation} from './TabNavigation';
import Login from '../screen/auth/Login';

const Stack = createStackNavigator();

const MainStack = () => {
  let useDetail = {};
  return (
    <>
      {useDetail == undefined || useDetail == null ? (
        <></>
      ) : (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={
            useDetail?.userID ? ROUTES.TabGroup : ROUTES.TabGroup
          }>
          <Stack.Screen
            name={ROUTES.Login}
            component={Login}
            options={{animationEnabled: true}}
          />
          <Stack.Screen
            name={ROUTES.TabGroup}
            component={TabNavigation}
            options={{animationEnabled: true}}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default MainStack;
