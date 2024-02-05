import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from '../types/navigation/navigationTypes';
import Home from '../pages/Home/Home';
import HomeAppBar from '../pages/Home/components/AppBar/HomeAppBar';
import {View} from '@gluestack-ui/themed';
import TabNavigation from './tab-navigation/tab-navigation';
import Splash from '../pages/Splash/Splash';
import {useNetInfo} from '@react-native-community/netinfo';
import {useSelector} from 'react-redux';
import {RootState} from '../stores/store';
const Stack = createStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  const netInfo = useNetInfo();
  const [showSplash, setShowSplash] = useState(true);
  const isSelectLang = useSelector(
    (state: RootState) => state.isSelectLang.isSelectedLang,
  );
  useEffect(() => {
    setTimeout(() => {
      if (netInfo.isConnected === true && isSelectLang === true) {
        setShowSplash(false);
      }
    }, 3000);
  }, [netInfo, isSelectLang]);
  if (showSplash) {
    return <Splash />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default MainNavigation;
