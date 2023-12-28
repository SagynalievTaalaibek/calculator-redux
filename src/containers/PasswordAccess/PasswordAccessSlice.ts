import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PasswordAccessState {
  password: string;
  outputValue: string;
  inputPassword: string;
  access: boolean;
}

const initialState: PasswordAccessState = {
  password: '2835',
  outputValue: '',
  inputPassword: '',
  access: false,
};

export const passwordAccessSlice = createSlice({
  name: 'passwordAccess',
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      if (state.outputValue.length < 4) {
        state.inputPassword += action.payload;
        state.outputValue += '*';
      }
    },

    deleteLastInput: (state) => {
      state.inputPassword = state.inputPassword.slice(0, -1);
      state.outputValue = state.outputValue.slice(0, -1);
    },

    checkPassword: (state) => {
      if (state.inputPassword === state.password) {
        state.outputValue = 'Access Granted';
        state.access = true;
      } else {
        state.outputValue = 'Access Denied';
        state.access = false;
      }
    },
  },
});

export const passwordReducer = passwordAccessSlice.reducer;
export const { setInputValue, deleteLastInput, checkPassword } =
  passwordAccessSlice.actions;
