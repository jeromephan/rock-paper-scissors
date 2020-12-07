import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './modules/rootReducers';

export default configureStore({
  reducer: rootReducers,
});
