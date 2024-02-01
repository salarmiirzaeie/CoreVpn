import {Avatar, AvatarImage, Text} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React from 'react';

const ConnectedServerBox = () => {
  return (
    <Box
      borderWidth={1}
      borderColor="$primary"
      justifyContent="space-between"
      flex={1}
      rounded={'$3xl'}
      bg="$backgroundLight900"
      my={'$3'}
      alignItems="center"
      flexDirection="row"
      px={'$3'}>
      <Box flex={0.6} justifyContent="space-between" flexDirection="row">
        <Avatar>
          <AvatarImage
            alt="country"
            source={require('../../../../../assets/img/UK.png')}
          />
        </Avatar>
        <Box>
          <Text size="lg" bold color="$textLight50">
            United Kingdom
          </Text>
          <Text size="sm" color="$textLight500">
            Server Premium 01
          </Text>
        </Box>
      </Box>
      <Box flex={0.2}>
        <Text textAlign="center" alignSelf="center">
          879 MS
        </Text>
      </Box>
    </Box>
  );
};

export default ConnectedServerBox;
