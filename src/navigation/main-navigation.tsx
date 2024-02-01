import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation/navigationTypes';
import Home from '../pages/Home/Home';
import HomeAppBar from '../pages/Home/components/AppBar/HomeAppBar';
import {View} from '@gluestack-ui/themed';
const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          options={{
            header: () => <HomeAppBar />,
            headerShown: true,
          }}
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;