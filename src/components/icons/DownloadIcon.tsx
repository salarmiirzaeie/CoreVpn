import {View, Text} from 'react-native';
import React from 'react';
import {Image} from '@gluestack-ui/themed';

const DownloadIcon = () => {
  return (
    <Image
      alt="download"
      source={require('../../../assets/img/Download.png')}
      width={24}
      height={24}
      resizeMode="contain"
    />
  );
};

export default DownloadIcon;
