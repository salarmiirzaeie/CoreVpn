import {Image, Spinner, Text, View} from '@gluestack-ui/themed';
import {useNetInfo} from '@react-native-community/netinfo';
import React, {useEffect} from 'react';
import SelectLangAct from './components/SelectLangAct';
import {useSelector} from 'react-redux';
import {RootState} from '../../stores/store';

const Splash = () => {
  const netInfo = useNetInfo();
  const isSelectLang = useSelector(
    (state: RootState) => state.isSelectLang.isSelectedLang,
  );

  return (
    <View bg="$primary" flex={1} justifyContent="center" alignItems="center">
      <Image
        source={require('../../../assets/img/Splash.png')}
        width={300}
        height={300}
        resizeMode="contain"
        alt="Splash"
      />
      <Text color="$textLight50" size="5xl">
        CoreVpn
      </Text>
      {netInfo.isConnected === false ? (
        <Text color="$error300">Network is unavailable</Text>
      ) : (
        <Spinner size={'large'} />
      )}
      <SelectLangAct isOpen={!isSelectLang} onClose={() => {}} />
    </View>
  );
};

export default Splash;
