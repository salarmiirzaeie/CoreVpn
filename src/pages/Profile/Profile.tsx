import {
  Box,
  Divider,
  Image,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  RepeatIcon,
  SettingsIcon,
  Text,
  View,
} from '@gluestack-ui/themed';
import React from 'react';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {primary} from '../../config/consts';
import CustomInput from '../../components/Inputs/CustomInput';
import SettingItem from './components/Box/SettingItem';
import {CopyIcon} from '@gluestack-ui/themed';
import PrimaryButton from '../../components/buttons/PrimaryButton';
const Profile = () => {
  return (
    <View flex={1} bg="$background">
      <View flex={0.4} justifyContent="center" alignItems="center">
        <Image
          source={require('../../../assets/img/NoResults.png')}
          width={300}
          height={300}
          resizeMode="contain"
          alt="NoResults"
        />
      </View>
      <View flex={0.12} justifyContent="space-between" alignItems="center">
        <Text color="$textLight50">Looks like You’re not signed in yet.</Text>
        <SecondaryButton
          onPress={() => console.log('Pressed')}
          title="Sign In"
        />
      </View>
      <View flex={0.1} />
      <View justifyContent="space-between" my={'$6'} flex={0.35} px={'$6'}>
        <Box>
          <SettingItem
            value="523325"
            title="User ID"
            leftIcon={
              <Text color="$primary" size="lg" bold>
                ID
              </Text>
            }
            rightIcon={<CopyIcon color="$textLight500" />}
          />
          <Divider />
        </Box>
        <Box>
          <SettingItem
            title="Base Plan"
            leftIcon={<SettingsIcon color="$primary" />}
            rightIcon={
              <PrimaryButton
                title="UPGRADE"
                size="sm"
                onPress={() => console.log('Pressed')}
              />
            }
          />
          <Divider />
        </Box>
        <Box>
          <SettingItem
            title="Restore"
            leftIcon={<RepeatIcon color="$primary" />}
          />
          <Divider />
        </Box>
        <Box>
          <SettingItem
            title="Settings"
            leftIcon={<SettingsIcon color="$primary" />}
          />
          <Divider />
        </Box>
      </View>
    </View>
  );
};

export default Profile;
