import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: null as string | null,
  isAuth: false,
};

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    logout: () => initialState,
    setUserName: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      state.isAuth = !!action.payload;
    },
  },
});

export const { logout, setUserName } = exampleSlice.actions;

export default exampleSlice.reducer;
