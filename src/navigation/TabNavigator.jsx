/* eslint-disable semi */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {THEME} from '../utils/theme'
import {SCREENS} from '../utils/screens'
import {View, Text} from 'react-native';


import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import LeaderBoard from '../screens/LeaderBoard';

const Tab = createBottomTabNavigator();
export const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          borderRadius: 20,
          borderTopColor: 'transparent',
          height: 65,
          position: 'absolute',
          marginHorizontal: 40,
          marginBottom: 20,
          // bottom: Platform.OS === 'ios' ? insets.bottom : 20,
          backgroundColor: THEME.COLORS.Foreground,
          elevation: 20,
          alignItems: 'center',
          paddingBottom: 'auto', // for ios to make it vertically center
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: THEME.COLORS.Primarydark,
      })}>
      <Tab.Screen
        name={SCREENS.Home}
        component={Home}
        options={{
          header : () => null,
          tabBarIcon: ({color, size, focused}) => (
            <CustomTabIcon focused={focused}>
              <Ionicons name="home" color={color} size={size} />
            </CustomTabIcon>
          ),
        }}
      />

      <Tab.Screen

        name={SCREENS.Leaderboard}
        component={LeaderBoard}
        options={{
          header : () => (
            <View style={{
              display : 'flex',
              justifyContent : 'space-between',
              alignItems : 'center',
              width : '100%',
              paddingVertical : 12,
              backgroundColor : THEME.COLORS.Background,
            }}>
              <Text style ={{
                fontSize : 20,
                fontWeight: 'bold',
                color : THEME.COLORS.Primarylight,
              }}>LeaderBoard</Text>
            </View>
          ),
          tabBarIcon: ({color, size, focused}) => (
            <CustomTabIcon focused={focused}>
              <Ionicons name="trophy" color={color} size={size} />
            </CustomTabIcon>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

function CustomTabIcon({children, focused}) {
  return (
    <View
      style={{
        backgroundColor: focused
          ? THEME.COLORS.Primarylight
          : THEME.COLORS.Foreground,
        borderRadius: 50,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {children}
    </View>
  );
}

export default HomeTabNavigator;
