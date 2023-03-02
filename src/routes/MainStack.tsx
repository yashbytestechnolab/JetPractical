import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from './RoutesName/RoutesName';
import {TabNavigation} from './TabNavigation';
import Login from '../screen/auth/Login';
import {AsyncStorageGetValue} from '../services/LocalStorage';
import {LocalStorageKeys} from '../constants/LocakStorageKeys';

const Stack = createStackNavigator();

const MainStack = () => {
  const [userDetail, setUserDetail] = useState(false);

  const onGetUserDetail = async () => {
    const credential: any = await AsyncStorageGetValue(
      LocalStorageKeys.credential,
    );
    setUserDetail(credential?.email || {});
  };

  useEffect(() => {
    onGetUserDetail();
  }, []);

  return (
    <>
      {!userDetail ? (
        <></>
      ) : (
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={userDetail?.email ? ROUTES.TabGroup : ROUTES.Login}>
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
