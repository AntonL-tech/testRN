import {configureStore} from '@reduxjs/toolkit';
import reducerList from './reducerList';
const store = configureStore({
  reducer: {
    reducerList,
  },
});
export default store;
