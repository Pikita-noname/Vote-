import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const votesApi = createApi({
  reducerPath: "votesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:2805/" }),
  endpoints: (build) => ({
    fetchVotes: build.query({
      query: () => "voteList",
    }),
  }),
});

export const { useFetchVotesQuery } = votesApi;
