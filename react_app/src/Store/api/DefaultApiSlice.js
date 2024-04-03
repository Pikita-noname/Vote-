import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const DefaultApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:8888'}),
    endpoints: builder =>  ({
    })
})

