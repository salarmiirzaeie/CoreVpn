import {Box, Divider, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import DownloadIcon from '../../../../components/icons/DownloadIcon';
import UploadIcon from '../../../../components/icons/UploadIcon';

const CounterBox = () => {
  return (
    <View py={'$3'} alignItems="center" flex={1}>
      <Box flex={0.6} alignItems="center">
        <Text bold color="$textLight50" size="5xl">
          00:57:34
        </Text>
        <Text color="$textLight500">Connecting Time</Text>
      </Box>

      <Box
        flex={0.4}
        w={'80%'}
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row">
        <Box justifyContent="space-between" w={'40%'} flexDirection="row">
          <DownloadIcon />
          <Box>
            <Text bold color="$textLight50">
              100MBps
            </Text>
            <Text size="sm" color="$textLight500">
              Download
            </Text>
          </Box>
        </Box>

        <Divider h={'$7'} bg="$textLight500" orientation="vertical" />
        <Box w={'40%'} justifyContent="space-between" flexDirection="row">
          <UploadIcon />
          <Box>
            <Text bold color="$textLight50">
              100MBps
            </Text>
            <Text size="sm" color="$textLight500">
              Upload
            </Text>
          </Box>
        </Box>
      </Box>
    </View>
  );
};

export default CounterBox;
