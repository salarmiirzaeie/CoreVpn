import {Button, ButtonIcon, Text, View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import CrownIcon from '../../../../components/icons/CrownIcon';
import {amber400, height} from '../../../../config/consts';
import PremiumIcon from '../../../../components/icons/PremiumIcon';
interface IHomeAppBarPropsType {
  navigation: any;
}
const HomeAppBar: FC<IHomeAppBarPropsType> = ({navigation}) => {
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
      <Button
        onPress={() => navigation.navigate('Premium')}
        rounded={'$lg'}
        px="$3"
        bg="$backgroundLight900">
        <ButtonIcon as={PremiumIcon} />
      </Button>
    </View>
  );
};

export default HomeAppBar;
