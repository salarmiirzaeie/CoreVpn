import React, {FC} from 'react';
import {
  Actionsheet,
  ActionsheetContent,
  Box,
  Pressable,
  Text,
  View,
} from '@gluestack-ui/themed';
import {ActionsheetBackdrop} from '@gluestack-ui/themed';
import {ActionsheetDragIndicatorWrapper} from '@gluestack-ui/themed';
import {ActionsheetDragIndicator} from '@gluestack-ui/themed';
import {height} from '../../../config/consts';
import PrimaryButton from '../../../components/buttons/PrimaryButton';
import IranFlagIcon from '../../../components/icons/IranFlagIcon';
import EnglishFlagIcon from '../../../components/icons/EnglishFlagIcon';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../stores/store';
import {selecLanguage} from '../../../stores/localizationStore/selectLanAction';
import LanguageBox from './LanguageBox';

interface IAvailableServersActPropsType {
  isOpen: boolean;
  onClose: () => void;
}
const SelectLangAct: FC<IAvailableServersActPropsType> = ({
  isOpen,
  onClose,
}) => {
  const [selected, setSelectedLang] = React.useState<
    'English' | 'Farsi' | null
  >(null);
  const dispatch = useDispatch();
  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <ActionsheetBackdrop />
      <ActionsheetContent bg="$background" h={height * 0.5}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
          <View w={'100%'} h={'100%'} py={'$4'} px={'$2'}>
            <View w={'100%'} flex={1}>
              <Box>
                <Text color="$textLight50" textAlign="center">
                  Please select your preferred language.
                </Text>
                <Text color="$textLight50" textAlign="center">
                  لطفا زبان ترجیحی خود را انتخاب کنید.
                </Text>
              </Box>
              <View flex={0.2} />
              <View
                flex={0.4}
                justifyContent="space-between"
                flexDirection="row">
                <LanguageBox
                  onPress={() => setSelectedLang('Farsi')}
                  selected={selected === 'Farsi' ? true : false}
                  country="Iran"
                />
                <LanguageBox
                  onPress={() => setSelectedLang('English')}
                  selected={selected === 'English' ? true : false}
                  country="English"
                />
              </View>
              <View flex={0.4} justifyContent="flex-end">
                <PrimaryButton
                  disabled={!selected}
                  size="lg"
                  onPress={() => {
                    onClose();
                    setTimeout(() => {
                      dispatch(selecLanguage(true));
                    }, 1000);
                  }}
                  title="Continue"
                />
              </View>
            </View>
          </View>
        </ActionsheetDragIndicatorWrapper>
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default SelectLangAct;
