import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import type { RootState } from "../store";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://job.kitactive.ru/api/",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
