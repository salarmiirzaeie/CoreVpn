import {createReducer} from '@reduxjs/toolkit';
import {selecLanguage} from './selectLanAction';

interface ITokenState {
  isSelectedLang: boolean;
}

const initialState: ITokenState = {
  isSelectedLang: false,
};

const selectLangReducer = createReducer(initialState, builder => {
  builder.addCase(selecLanguage, (state, action) => {
    state.isSelectedLang = action.payload;
  });
});

export default selectLangReducer;
