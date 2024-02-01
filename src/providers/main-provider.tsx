import React, {FC, PropsWithChildren} from 'react';
import {GluestackUIProvider, View, useColorMode} from '@gluestack-ui/themed';
import {config} from '../../config/gluestack-ui.config';

const MainProvider: FC<PropsWithChildren> = ({children}) => {
  return <GluestackUIProvider config={config}>{children}</GluestackUIProvider>;
};

export default MainProvider;
