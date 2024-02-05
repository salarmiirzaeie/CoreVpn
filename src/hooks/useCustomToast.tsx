import {View, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  CloseIcon,
  HStack,
  Pressable,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  useToast,
} from '@gluestack-ui/themed';

const useCustomToast = () => {
  const toast = useToast();
  const show = ({
    type,
    msg,
  }: {
    type: 'error' | 'warning' | 'success' | 'info' | 'attention';
    msg: string;
  }) => {
    toast.show({
      placement: 'bottom',

      render: () => {
        return (
          <Toast
            action={type}
            rounded={'$full'}
            mb={'$12'}
            bg="$background"
            variant="solid">
            <ToastDescription>{msg}</ToastDescription>
          </Toast>
        );
      },
    });
  };
  return {
    show,
  };
};

export default useCustomToast;
