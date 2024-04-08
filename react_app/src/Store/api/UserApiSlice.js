import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const UserApiSlice = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8888/user" }),
  endpoints: (builder) => ({
    auth: builder.mutation({
      query: (data) => ({
        url: "/auth",
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
    }),
    current: builder.mutation({
      query: (data) => ({
        url: "/current",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAuthMutation, useRegisterMutation, useCurrentMutation } =
  UserApiSlice;
