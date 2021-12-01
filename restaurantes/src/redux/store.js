import { configureStore } from '@reduxjs/toolkit';
import stateReducers from './state';

export default configureStore({
  reducer: {
    state: stateReducers,
  },
});