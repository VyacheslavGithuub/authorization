import { baseQuery } from "../baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  IExitUserResponse,
  IUserLogin,
  IUserLoginResponse,
  IUserRegistration,
  IUserRegistrationResponse,
} from "./type";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["Auth"],
  endpoints: (build) => ({
    registerUser: build.mutation<IUserRegistrationResponse, IUserRegistration>({
      query: (data) => ({
        url: "register",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    loginUser: build.mutation<IUserLoginResponse, IUserLogin>({
      query: (data) => ({
        url: "login ",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    exitUser: build.mutation<IExitUserResponse, any>({
      query: (data) => ({
        url: "logout ",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useExitUserMutation,
} = userApi;
