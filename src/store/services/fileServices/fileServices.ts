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
      providesTags: (result) => ["File"],
    }),
    addFileApi: build.mutation<any, any>({
      query: (data) => ({
        url: "media/upload",
        method: "POST",
        body: data,
        contentType: false,
        processData: false,
      }),
      invalidatesTags: ["File"],
    }),
    gettingFile: build.query<any, string>({
      query: (id) => ({
        url: `media/${id}`,
        method: "GET",

        responseHandler: async (response) =>
          window.location.assign(
            window.URL.createObjectURL(await response.blob())
          ),
        cache: "no-cache",
      }),
      providesTags: (result) => ["File"],
    }),

    deleteFile: build.mutation<any, string>({
      query: (id) => ({
        url: `media/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["File"],
    }),
  }),
});

export const {
  useGettingFilesQuery,
  useGettingFileQuery,
  useAddFileApiMutation,
  useDeleteFileMutation,
} = fileApi;
