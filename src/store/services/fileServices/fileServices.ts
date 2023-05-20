import { baseQuery } from "../baseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
import { IGettingFiles } from "./type";

export const fileApi = createApi({
  reducerPath: "fileApi",
  baseQuery,
  tagTypes: ["File"],
  endpoints: (build) => ({
    gettingFiles: build.query<IGettingFiles, string>({
      query: () => `media`,
    }),
    addFileApi: build.mutation<any, any>({
      query: (data) => ({
        url: "media/upload",
        method: "POST",
        body: data,
        contentType: false,
        processData: false,
      }),
    }),
  }),
});

export const { useGettingFilesQuery, useAddFileApiMutation } = fileApi;
