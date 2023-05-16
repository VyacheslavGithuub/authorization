import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IUserLogin,
  IUserLoginResponse,
  IUserRegistration,
  IUserRegistrationResponse,
} from "./type";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SOME_BASE_URL }),
  endpoints: (build) => ({
    registerUser: build.mutation<IUserRegistrationResponse, IUserRegistration>({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
    }),
    loginUser: build.mutation<IUserLoginResponse, IUserLogin>({
      query: (data) => ({
        url: "login ",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterUserMutation } = userApi;
export const { useLoginUserMutation } = userApi;
