import {View, Text} from 'react-native';
import React, {FC} from 'react';
import {Button, ButtonSpinner, ButtonText} from '@gluestack-ui/themed';
interface IPrimaryBtnPropType {
  onPress: () => void;
  title: string;
  title2?: string;
  disabled?: boolean;
  loading?: boolean;
  style?: object;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | undefined;
}
const PrimaryButton: FC<IPrimaryBtnPropType> = ({
  onPress,
  title,
  disabled,
  loading,
  style,
  title2,
  size,
}) => {
  return (
    <Button
      $active-bg="$primary500"
      size={size}
      rounded={'$full'}
      bg={disabled ? '$backgroundLight900' : '$primary600'}
      onPress={onPress}
      disabled={disabled || loading}
      flexDirection="row"
      justifyContent={title2 ? 'space-around' : 'center'}
      style={style}>
      {loading && <ButtonSpinner />}
      <ButtonText>{title}</ButtonText>
      <ButtonText>{title2}</ButtonText>
    </Button>
  );
};

export default PrimaryButton;
