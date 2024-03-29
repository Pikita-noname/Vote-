import {configureStore} from "@reduxjs/toolkit"
import VoteReducer from "./VoteSlice"

export default configureStore({
    reducer:{
        user: UserReducer,
        votes: VoteReducer
    }
})