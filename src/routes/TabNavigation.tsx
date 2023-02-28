import React from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ROUTES } from './RoutesName/RoutesName';
import Home from '../screen/Home';
import Favourite from '../screen/Favourite';
import { Colors } from '../constants/Colors';
import { icon } from '../assets/icons';
import { strings } from '../constants/strings';

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  const getRouteIcon = (routeName: string, focused: boolean) => {
    switch (routeName) {
      case ROUTES.Home:
        return focused ? icon.homeFocused : icon.home
      case ROUTES.Favourite:
        return focused ? icon.favouriteFocused : icon.favourite
      default: return icon.favourite
    }
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName={ROUTES.Home}
        screenOptions={({ route }) => ({
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarStyle: [styles.tab],
          tabBarIcon: ({ focused }) => {
            const Icon = getRouteIcon(route.name, focused);
            return <Image source={Icon} style={{ height: 20, width: 20 }} />;
          },
        })}>

        <Tab.Screen
          name={ROUTES?.Home}
          component={Home}
          options={{
            tabBarLabel: () => <Text style={{ color: Colors.primary }}>{strings.home}</Text>
          }}
        />
        <Tab.Screen
          name={ROUTES?.Favourite}
          component={Favourite}
          options={{
            tabBarLabel: () => <Text style={{ color: Colors.primary }}>{strings.favourite}</Text>,
          }}
        />

      </Tab.Navigator>
      <SafeAreaView
        style={{ backgroundColor: Colors.white }}
        edges={['bottom']}
      />
    </>
  );
};
const styles = StyleSheet.create({
  tab: {
    position: 'absolute',
    borderTopWidth: 1,
    height: 55,
    paddingBottom: '1%',
  },
});
