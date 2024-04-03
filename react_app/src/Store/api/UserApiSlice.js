import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const UserApiSlice = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8888/user'}),
    endpoints: builder =>  ({
        auth: builder.mutation({
            query: data => ({
                url: 'user/auth',
                method: 'POST',
                body: data
            }),
        })
    })
})

export const {useAuthMutation} = UserApiSlice