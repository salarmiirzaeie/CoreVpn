import {combineReducers} from '@reduxjs/toolkit';
import selectLangReducer from './localizationStore/selectLanReducer';

export const rootReducer = combineReducers({
  isSelectLang: selectLangReducer,
});
