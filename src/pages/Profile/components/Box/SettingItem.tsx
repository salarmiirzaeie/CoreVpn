import React, {FC} from 'react';
import {Box, CopyIcon, Text} from '@gluestack-ui/themed';
import ProfileIcon from '../../../../components/icons/ProfileIcon';
import {textLight500} from '../../../../config/consts';
interface ISettingItemPropsType {
  leftIcon: React.ReactNode;
  rightIcon?: React.ReactNode;
  title: string;
  value?: string;
  onPress?: () => void;
}
const SettingItem: FC<ISettingItemPropsType> = ({
  leftIcon,
  rightIcon,
  title,
  value,
  onPress,
}) => {
  return (
    <Box alignItems="center" justifyContent="space-between" flexDirection="row">
      <Box flexDirection="row">
        {leftIcon}
        <Box mx={'$2'}>
          <Text color="$textLight50">{title}</Text>
          {value && (
            <Text size="xs" color="$textLight50">
              {value}
            </Text>
          )}
        </Box>
      </Box>
      {rightIcon && rightIcon}
    </Box>
  );
};

export default SettingItem;
