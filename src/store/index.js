import { configureStore, createSlice } from "@reduxjs/toolkit";
const signInFormState = {
  isOpened: false,
};

const signInFormSlice = createSlice({
  name: "signInForm",
  initialState: signInFormState,
  reducers: {
    open(state) {
      state.isOpened = !state.isOpened;
    },
  },
});

const initialExtraMenuState = {
  isOpened: false,
};

const extraMenuSlice = createSlice({
  name: "extraMenu",
  initialState: initialExtraMenuState,
  reducers: {
    open(state) {
      state.isOpened = !state.isOpened;
    },
  },
});
const store = configureStore({
  reducer: {
    signInForm: signInFormSlice.reducer,
    extraMenu: extraMenuSlice.reducer,
  },
});
export const signInFormActions = signInFormSlice.actions;
export const extraMenuActions = extraMenuSlice.actions;
export default store;
