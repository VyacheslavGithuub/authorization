import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  isAuth: boolean;
}

const initialState: AuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    entrance: (state) => {
      state.isAuth = true;
    },
    exit: (state) => {
      state.isAuth = false;
    },
  },
});

export const { entrance, exit } = authSlice.actions;

export default authSlice.reducer;
