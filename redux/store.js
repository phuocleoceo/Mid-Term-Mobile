import { configureStore } from '@reduxjs/toolkit';
import stationSlice from './slices/stationSlice';

export const store = configureStore({
    reducer: {
        station: stationSlice
    },
});