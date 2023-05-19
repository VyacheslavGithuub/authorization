import { baseQuery } from "./baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  IExitUser,
  IExitUserResponse,
  IUserLogin,
  IUserLoginResponse,
  IUserRegistration,
  IUserRegistrationResponse,
} from "./type";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["auth"],
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
    exitUser: build.mutation<IExitUserResponse, any>({
      query: (data) => ({
        url: "logout ",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useExitUserMutation,
} = userApi;
