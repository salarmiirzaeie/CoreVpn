import {View, Text} from 'react-native';
import React from 'react';
import {Input, InputIcon} from '@gluestack-ui/themed';
import {InputSlot} from '@gluestack-ui/themed';
import {InputField} from '@gluestack-ui/themed';
import {primary} from '../../config/consts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const CustomInput = () => {
  return (
    <Input borderTopWidth={0} borderRightWidth={0} borderLeftWidth={0}>
      <InputSlot>
        <InputIcon>
          <FontAwesome size={16} color={primary} name="user" />
        </InputIcon>
      </InputSlot>
      <InputField placeholder="Username" color="$white" />
    </Input>
  );
};

export default CustomInput;
