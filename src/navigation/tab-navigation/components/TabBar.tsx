import {Text, View} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {height} from '../../../config/consts';
import HomeIcon from '../../../components/icons/HomeIcon';
interface ITabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}
const TabBar: FC<ITabBarProps> = ({state, descriptors, navigation}) => {
  return (
    <View bg="$background" h={height / 10}>
      <View
        flex={1}
        my={'$4'}
        rounded={'$2xl'}
        mx={'$4'}
        flexDirection="row"
        bg="$backgroundLight900">
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const Icon = options.tabBarIcon;
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              accessibilityRole="button"
              // accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              {Icon ? ( // Check if icon is a valid React element
                Icon({
                  focused: isFocused,
                })
              ) : (
                <Text style={{color: isFocused ? '#00f' : '#aaa'}}>
                  {label}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
