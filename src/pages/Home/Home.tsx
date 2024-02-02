import {Text} from '@gluestack-ui/themed';
import {View} from '@gluestack-ui/themed';
import React from 'react';
import ConnectedServerBox from './components/Box/ConnectedServerBox';
import CounterBox from './components/Box/CounterBox';
import ConnectButton from './components/Button/ConnectButton';
import AvailableServersAct from './components/ActionSheet/AvailableServersAct';

const Home = () => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const [connectVpn, setConnectVpn] = React.useState<
    'connected' | 'connecting' | 'disconnected'
  >('disconnected');
  const handleClose = () => setShowActionsheet(!showActionsheet);
  const connectToVPN = () => {
    setConnectVpn('connecting');
    setTimeout(() => {
      setConnectVpn('connected');
    }, 3000);
  };
  return (
    <View px={'$4'} bg="$background" flex={1}>
      <View flex={0.15}>
        <ConnectedServerBox
          country="United Kingdom"
          name="Server Premium 01"
          speed="879 MS"
          onPress={() => setShowActionsheet(true)}
        />
      </View>
      <View flex={0.35}>
        <CounterBox />
      </View>
      <View flex={0.4} alignItems="center" justifyContent="center">
        <ConnectButton onPress={() => connectToVPN()} status={connectVpn} />
      </View>
      <AvailableServersAct isOpen={showActionsheet} onClose={handleClose} />
    </View>
  );
};

export default Home;
