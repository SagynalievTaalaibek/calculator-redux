import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculatorState {
  inputValue: string;
}

const initialState: CalculatorState = {
  inputValue: '',
};

export const calculatorSlice = createSlice({
  name: 'calculatorSlice',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue += action.payload;
    },

    calculate: (state) => {
      try {
        state.inputValue = eval(state.inputValue).toString();
      } catch (error) {
        state.inputValue = '';
      }
    },

    deleteLastInput: (state) => {
      state.inputValue = state.inputValue.slice(0, -1);
    },
  },
});

export const calculatorReducer = calculatorSlice.reducer;
export const { setInputValue, calculate, deleteLastInput } =
  calculatorSlice.actions;
