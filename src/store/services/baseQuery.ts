import { fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_SOME_BASE_URL,
  prepareHeaders: (headers) => {
    const token = sessionStorage.getItem("test");

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
