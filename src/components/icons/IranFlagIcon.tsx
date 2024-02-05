import {View, Text} from 'react-native';
import React from 'react';
import {Image} from '@gluestack-ui/themed';

const IranFlagIcon = () => {
  return (
    <Image
      alt="download"
      source={require('../../../assets/img/flags/IranFlag.png')}
      width={28}
      height={28}
      rounded={'$lg'}
      resizeMode="contain"
    />
  );
};

export default IranFlagIcon;
