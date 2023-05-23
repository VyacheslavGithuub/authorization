import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface fileState {
  files: any;
}

const initialState: fileState = {
  files: null,
};

export const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setFilesAction: (state, action) => {
      state.files = action.payload;
    },
    deleteFileAction: (state, action: PayloadAction<number>) => {
      state.files.splice(action.payload, 1);
    },
  },
});

export const { setFilesAction, deleteFileAction } = fileSlice.actions;
export default fileSlice.reducer;
