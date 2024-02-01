import {View, Text} from 'react-native';
import React from 'react';
import MainProvider from './providers/main-provider';
import MainNavigation from './navigation/main-navigation';

const App = () => {
  return (
    <MainProvider>
      <MainNavigation />
    </MainProvider>
  );
};

export default App;
