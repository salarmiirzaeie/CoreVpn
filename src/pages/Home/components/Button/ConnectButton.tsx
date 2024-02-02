import {Box, CircleIcon, Text, View} from '@gluestack-ui/themed';
import React, {FC, useEffect} from 'react';
import Lightning from '../../../../components/icons/LightningIcon';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native';
import {primary700} from '../../../../config/consts';
import TurnOffIcon from '../../../../components/icons/TurnOffIcon';
import CheckIcon from '../../../../components/icons/CheckIcon';
interface IConnectButtonPropsType {
  onPress: () => void;
  status: 'connected' | 'connecting' | 'disconnected';
}
const ConnectButton: FC<IConnectButtonPropsType> = ({status, onPress}) => {
  const heightValue = useSharedValue(220);
  const widthValue = useSharedValue(220);

  useEffect(() => {
    if (status === 'connecting') {
      heightValue.value = withRepeat(
        withSequence(
          withTiming(180, {duration: 1000, easing: Easing.linear}),
          withTiming(220, {duration: 1000, easing: Easing.linear}),
        ),
        -1,
      );
      widthValue.value = withRepeat(
        withSequence(
          withTiming(180, {duration: 1000, easing: Easing.linear}),
          withTiming(220, {duration: 1000, easing: Easing.linear}),
        ),
        -1,
      );
    } else {
      heightValue.value = withTiming(220, {
        duration: 1000,
        easing: Easing.linear,
      });
      widthValue.value = withTiming(220, {
        duration: 1000,
        easing: Easing.linear,
      });
    }
  }, [status]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: heightValue.value,
      width: widthValue.value,
    };
  });
  return (
    <TouchableOpacity disabled={status === 'connecting'} onPress={onPress}>
      <Animated.View
        style={[
          {
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 999,
            backgroundColor: primary700,
            height: 220,
            width: 220,
          },
          animatedStyle,
        ]}>
        <View
          alignItems="center"
          zIndex={2}
          rounded={'$full'}
          h={'80%'}
          w={'80%'}
          justifyContent="center"
          bg="$primary600">
          <View
            zIndex={3}
            rounded={'$full'}
            h={'80%'}
            w={'80%'}
            alignItems="center"
            justifyContent="center"
            bg="$primary500">
            {status === 'disconnected' ? (
              <TurnOffIcon />
            ) : status === 'connecting' ? (
              <Lightning />
            ) : (
              <CheckIcon />
            )}
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ConnectButton;
