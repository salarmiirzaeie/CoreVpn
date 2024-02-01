import {View, Text} from 'react-native';
import React from 'react';
import {Image} from '@gluestack-ui/themed';

const UploadIcon = () => {
  return (
    <Image
      alt="download"
      source={require('../../../assets/img/Upload.png')}
      width={24}
      height={24}
      resizeMode="contain"
    />
  );
};

export default UploadIcon;
