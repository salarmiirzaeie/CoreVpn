import {View, Text} from 'react-native';
import React from 'react';
import {Image} from '@gluestack-ui/themed';

const LightningIcon = () => {
  return (
    <Image
      alt="Lightning"
      source={require('../../../assets/img/Lightning.png')}
      width={48}
      height={48}
      resizeMode="contain"
    />
  );
};

export default LightningIcon;
