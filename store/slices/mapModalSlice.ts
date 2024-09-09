import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

export const answerSlice = createSlice({
  name: 'mapModal',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      return {
        isOpen: !state.isOpen,
      };
    },
  },
});

export const { toggleMenu } = answerSlice.actions;
export default answerSlice.reducer;
