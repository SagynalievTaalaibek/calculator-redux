import { configureStore } from '@reduxjs/toolkit';
import { passwordReducer } from '../containers/PasswordAccess/PasswordAccessSlice';
import { calculatorReducer } from '../containers/Calculator/CalculatorSlice';

export const store = configureStore({
  reducer: {
    password: passwordReducer,
    calculate: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
