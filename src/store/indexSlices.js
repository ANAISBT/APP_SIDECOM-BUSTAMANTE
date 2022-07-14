import PlaceReducer from './PlaceSlices';
import { configureStore } from '@reduxjs/toolkit';

export const store= configureStore({
     reducer:{
         place:PlaceReducer,
     },
     middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
         serializableCheck:false,
     }),
 });
