import {Text} from '@gluestack-ui/themed';
import {View} from '@gluestack-ui/themed';
import React from 'react';
import ConnectedServerBox from './components/Box/ConnectedServerBox';
import CounterBox from './components/Box/CounterBox';
import ConnectButton from './components/Button/ConnectButton';

const Home = () => {
  return (
    <View px={'$4'} bg="$background" flex={1}>
      <View flex={0.15}>
        <ConnectedServerBox />
      </View>
      <View flex={0.3}>
        <CounterBox />
      </View>
      <View flex={0.3} alignItems="center" justifyContent="center">
        <ConnectButton
          onPress={() => console.log('object')}
          connected={true}
          connecting={false}
        />
      </View>
    </View>
  );
};

export default Home;
