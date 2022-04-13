import { createSlice } from '@reduxjs/toolkit';

const init = {
    listStation: [],
    currentStation: {}
}

export const stationSlice = createSlice({
    name: 'station',
    initialState: init,
    reducers: {
        SET_LIST_STATION: (state, action) =>
        {
            return { ...state, listStation: action.payload };
        },
        SET_CURRENT_STATION: (state, action) =>
        {
            return { ...state, currentStation: action.payload };
        }
    },
    extraReducers: {}
})

export const { SET_LIST_STATION, SET_CURRENT_STATION } = stationSlice.actions;

export default stationSlice.reducer;