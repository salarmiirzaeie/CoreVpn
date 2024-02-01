import {Button, ButtonIcon, Text, View} from '@gluestack-ui/themed';
import React from 'react';
import CrownIcon from '../../../../components/icons/CrownIcon';
import {height} from '../../../../config/consts';

const HomeAppBar = () => {
  return (
    <View
      alignItems="center"
      px={'$4'}
      h={height / 12}
      bg="$background"
      flexDirection="row"
      justifyContent="space-between">
      <Text size="2xl" color="$textLight50">
        CoreVPN
      </Text>
      <Button rounded={'$lg'} px="$3" bg="$backgroundLight900">
        <ButtonIcon as={CrownIcon} />
      </Button>
    </View>
  );
};

export default HomeAppBar;
