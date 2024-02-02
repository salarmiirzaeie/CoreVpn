import {
  ArrowRightIcon,
  Avatar,
  AvatarImage,
  ChevronRightIcon,
  Pressable,
  Text,
} from '@gluestack-ui/themed';
import {Box} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {RollInRight} from 'react-native-reanimated';
import {height} from '../../../../config/consts';
interface IConnectedServerBoxPropsType {
  onPress: () => void;
  country: string;
  name: string;
  speed: string;
}
const ConnectedServerBox: FC<IConnectedServerBoxPropsType> = ({
  onPress,
  country,
  name,
  speed,
}) => {
  return (
    <Pressable
      onPress={onPress}
      borderWidth={1}
      borderColor="$primary"
      justifyContent="space-between"
      h={height / 10}
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
            {country}
          </Text>
          <Text size="sm" color="$textLight500">
            {name}
          </Text>
        </Box>
      </Box>
      <Box flex={0.2}>
        <Text textAlign="center" alignSelf="center">
          {speed}
        </Text>
      </Box>
      <ChevronRightIcon size="lg" />
    </Pressable>
  );
};

export default ConnectedServerBox;
