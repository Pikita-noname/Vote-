import { configureStore } from '@reduxjs/toolkit'
import VoteReducer from './VoteSlice'
import UserReducer from './UserSlice'
import { DefaultApi } from './api/DefaultApiSlice.js'
import {UserApiSlice} from './api/UserApiSlice.js'

export default configureStore({
    reducer: {
        user: UserReducer,
        votes: VoteReducer,
        [DefaultApi.reducerPath]: DefaultApi.reducer,
        [UserApiSlice.reducerPath]: UserApiSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(DefaultApi.middleware,UserApiSlice.middleware),
})