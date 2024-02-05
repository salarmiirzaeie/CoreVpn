import {Pressable, Text} from '@gluestack-ui/themed';
import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import {selecLanguage} from '../../../stores/localizationStore/selectLanAction';
import IranFlagIcon from '../../../components/icons/IranFlagIcon';
import EnglishFlagIcon from '../../../components/icons/EnglishFlagIcon';
interface ILanguageBoxPropsType {
  country: string;
  selected: boolean;
  onPress: () => void;
}
const LanguageBox: FC<ILanguageBoxPropsType> = ({
  country,
  selected,
  onPress,
}) => {
  const dispatch = useDispatch();
  return (
    <Pressable
      onPress={onPress}
      rounded={'$lg'}
      justifyContent="center"
      alignItems="center"
      borderWidth={1}
      bg={selected ? '$primary600' : '$background'}
      flex={0.48}
      borderColor="$light600">
      {country === 'Iran' ? <IranFlagIcon /> : <EnglishFlagIcon />}
      <Text color="$textLight50">
        {country === 'English' ? 'English' : 'فارسی'}
      </Text>
    </Pressable>
  );
};

export default LanguageBox;
