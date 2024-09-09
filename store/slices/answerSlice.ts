import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type Payload = 'pending' | 'wrong' | 'correct';

type Answer = {
  questionIndex: number;
  answerState: Payload;
};

const initialState: Answer = {
  questionIndex: 0,
  answerState: 'pending',
};

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    setAnswerState: (state, action: PayloadAction<Payload>) => ({
      ...state,
      answerState: action.payload,
    }),
    openNextQuestion: (state) => ({
      ...state,
      questionIndex: state.questionIndex + 1,
    }),
    clearStore: () => {
      return initialState;
    },
  },
});

export const { setAnswerState, openNextQuestion, clearStore } = answerSlice.actions;
export default answerSlice.reducer;
