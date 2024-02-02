import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../pages/Home/Home';
import HomeAppBar from '../../pages/Home/components/AppBar/HomeAppBar';
import {TabStackParamList} from '../../types/navigation/navigationTypes';
import TabBar from './components/TabBar';
import HomeIcon from '../../components/icons/HomeIcon';
import {primary, textLight500} from '../../config/consts';
import {useColorMode, useTheme} from '@gluestack-style/react';
import PremiumIcon from '../../components/icons/PremiumIcon';
import ProfileIcon from '../../components/icons/ProfileIcon';
import Premium from '../../pages/Premium/Premium';
import Profile from '../../pages/Profile/Profile';
import ProfileAppBar from '../../pages/Profile/components/AppBar/ProfileAppBar';
const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigation = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        options={{
          header: props => <HomeAppBar {...props} />,
          headerShown: true,
          tabBarIcon: ({focused, color}) => (
            <HomeIcon color={focused ? primary : textLight500} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Premium"
        component={Premium}
        options={{
          tabBarIcon: ({focused, color}) => (
            <PremiumIcon color={focused ? primary : textLight500} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({focused, color}) => (
            <ProfileIcon color={focused ? primary : textLight500} />
          ),
          headerShown: true,
          header: () => <ProfileAppBar />,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
