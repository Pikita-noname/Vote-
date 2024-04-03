import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const auth = createAsyncThunk(
    "user/auth", async ({ data }) => {
    const response = {name : "Вася", id: 1, token: 'адцбпуб23141йцуфыфырфан4экбпуэбпфкэ'};
    return response ;

});

const register = createAsyncThunk(
    "user/register", async () => {

    const response = {name : "Вася", id: 1, token: 'адцбпуб23141йцуфыфырфан4экбпуэбпфкэ'};
    return response ;

});

const UserSlice = createSlice({
    name: "Vote",
    initialState: {
        id: 0,
        name:'',
        token:'',
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(auth.fulfilled, (state, action) => {
            return action.payload;
        })
        builder.addCase(register.fulfilled, (state, action) => {
            return action.payload;
        })
    }
});

export default UserSlice.reducer;
