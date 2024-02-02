import {Button, ButtonIcon, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import CrownIcon from '../../../../components/icons/CrownIcon';
import {amber400, height} from '../../../../config/consts';
import PremiumIcon from '../../../../components/icons/PremiumIcon';

const ProfileAppBar = () => {
  return (
    <View
      alignItems="center"
      px={'$4'}
      h={height / 12}
      bg="$background"
      flexDirection="row">
      <Text size="2xl" color="$textLight50">
        My Account
      </Text>
    </View>
  );
};

export default ProfileAppBar;
