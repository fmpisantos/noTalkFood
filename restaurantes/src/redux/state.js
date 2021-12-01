import { createSlice } from '@reduxjs/toolkit';
import stateReducers from './stateReducers';

export const slice = createSlice({
  name: 'mode',
  initialState: 0, // 0 = marcar mesa, 1 = menu digital
  ...stateReducers
});

export const { changeMode } = slice.actions;

export const mode = state => state.mode

export const goToMenu = () => dispatch => {
  dispatch(changeMode(1));
}

export const goToMarcarMesa = () => dispatch => {
  dispatch(changeMode(0));
}

export default slice.reducer;