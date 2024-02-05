import React, {FC, PropsWithChildren} from 'react';
import {GluestackUIProvider, View, useColorMode} from '@gluestack-ui/themed';
import {config} from '../../config/gluestack-ui.config';
import i18n from '../localization/i18n';
import {I18nextProvider} from 'react-i18next';
import {Provider} from 'react-redux';
import {persistor, store} from '../stores/store';
import {PersistGate} from 'redux-persist/integration/react';

const MainProvider: FC<PropsWithChildren> = ({children}) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}></PersistGate>
      <GluestackUIProvider config={config}>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </GluestackUIProvider>
    </Provider>
  );
};

export default MainProvider;
