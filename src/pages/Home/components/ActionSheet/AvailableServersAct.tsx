import {View, Text, ListRenderItemInfo, FlatList} from 'react-native';
import React, {FC} from 'react';
import {Actionsheet, ActionsheetContent, Box} from '@gluestack-ui/themed';
import {ActionsheetBackdrop} from '@gluestack-ui/themed';
import {height} from '../../../../config/consts';
import ConnectedServerBox from '../Box/ConnectedServerBox';
import {ActionsheetDragIndicatorWrapper} from '@gluestack-ui/themed';
import {ActionsheetDragIndicator} from '@gluestack-ui/themed';
interface IServerType {
  country: string;
  name: string;
  speed: string;
  id: number;
}
interface IAvailableServersActPropsType {
  isOpen: boolean;
  onClose: () => void;
}
const AvailableServersAct: FC<IAvailableServersActPropsType> = ({
  isOpen,
  onClose,
}) => {
  const servers: IServerType[] = [
    {
      id: 1,
      country: 'United Kingdom',
      name: 'Server Premium 01',
      speed: '513.5MBps',
    },
    {
      id: 2,

      country: 'Norway',
      name: 'Server Premium 01',
      speed: '513.5MBps',
    },
    {
      id: 3,

      country: 'Canada',
      name: 'Server Premium 01',
      speed: '513.5MBps',
    },
    {
      id: 4,

      country: 'Norway',
      name: 'Server Premium 01',
      speed: '513.5MBps',
    },
  ];
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent bg="$background" h={height * 0.45}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <FlatList
          style={{width: '100%'}}
          data={servers}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}: {item: IServerType}) => (
            <ConnectedServerBox
              onPress={() => console.log('object')}
              country={item.country}
              name={item.name}
              speed={item.speed}
            />
          )}
        />
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default AvailableServersAct;
