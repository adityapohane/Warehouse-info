import { configureStore } from '@reduxjs/toolkit';

import warehousReducer from "../features/counter/productSlice"

export const store = configureStore({
  reducer: {
  
    warehouse:warehousReducer,
  
  },
});
