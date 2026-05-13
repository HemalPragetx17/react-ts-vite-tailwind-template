import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { IGeneralState } from '../state/app-state';

const initialState: IGeneralState = {
  showLoader: false,
};

const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    showLoader: (state, action: PayloadAction<boolean>) => {
      state.showLoader = action.payload;
    },
  },
});

export const { showLoader } = generalSlice.actions;
export default generalSlice.reducer;
