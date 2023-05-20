import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./services/userServices/userServices";
import { fileApi } from "./services/fileServices/fileServices";
import fileSlice from "./slice/fileSlice";

export const store = configureStore({
  reducer: {
    fileSlice,
    [userApi.reducerPath]: userApi.reducer,
    [fileApi.reducerPath]: fileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, fileApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
