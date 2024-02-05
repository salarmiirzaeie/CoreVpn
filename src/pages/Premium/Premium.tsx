import {Box, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import PremiumLgIcon from '../../components/icons/PremiumLgIcon';
import SirIcon from '../../components/icons/SirIcon';
import RocketIcon from '../../components/icons/RocketIcon';
import RemAddsIcon from '../../components/icons/RemAddsIcon';
import SecureIcon from '../../components/icons/SecureIcon';
import {height} from '../../config/consts';
import SecondaryButton from '../../components/buttons/SecondaryButton';

const Premium = () => {
  return (
    <View flex={1} px={'$6'} bg={'$background'}>
      <View justifyContent="flex-end" alignItems="center" flex={0.25}>
        <PremiumLgIcon />

        <Text size="xl" color="$textLight50" my={'$4'}>
          PRO features
        </Text>
      </View>
      <View flex={0.35}>
        <View
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          flex={0.5}>
          <Box flex={0.45}>
            <Box w={'100%'} flexDirection="row">
              <SirIcon />
              <Text bold color="$textLight50">
                Anonymous
              </Text>
            </Box>
            <Text color="$textLight500">
              Hide your ip with anonymous surfing
            </Text>
          </Box>
          <Box flex={0.45}>
            <Box w={'100%'} flexDirection="row">
              <RocketIcon />
              <Text bold color="$textLight50">
                Fast
              </Text>
            </Box>
            <Text color="$textLight500">
              Up to 1000 Mb/s bandwidth to explore
            </Text>
          </Box>
        </View>
        <View justifyContent="space-between" flexDirection="row" flex={0.5}>
          <Box flex={0.45}>
            <Box w={'100%'} flexDirection="row">
              <RemAddsIcon />
              <Text bold color="$textLight50">
                Remove Ads
              </Text>
            </Box>
            <Text color="$textLight500">
              Enjoy the app without annoying ads
            </Text>
          </Box>
          <Box flex={0.45}>
            <Box w={'100%'} flexDirection="row">
              <SecureIcon />
              <Text bold color="$textLight50">
                Secure
              </Text>
            </Box>
            <Text color="$textLight500">
              Transfer traffic via encrypted tunnel
            </Text>
          </Box>
        </View>
      </View>
      <View flex={0.05} />
      <View justifyContent="space-between" flex={0.3}>
        <PrimaryButton
          style={{height: height / 14}}
          title={'1 MONTH'}
          title2="9.99 $/month"
          onPress={() => null}
        />
        <PrimaryButton
          style={{height: height / 14}}
          title={'1 MONTH'}
          title2="9.99 $/month"
          onPress={() => null}
        />
        <SecondaryButton
          style={{height: height / 14}}
          title={'TRY FOR FREE'}
          onPress={() => null}
        />
        {/* <Text textAlign="center">7-day free trial. Then 9.99 $/month</Text> */}
      </View>
    </View>
  );
};

export default Premium;
