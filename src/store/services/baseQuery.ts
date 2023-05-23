import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { token } from "../../module/token";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_SOME_BASE_URL,
  prepareHeaders: (headers) => {
    if (token()) {
      headers.set("authorization", `Bearer ${token()}`);
    }

    return headers;
  },
});
