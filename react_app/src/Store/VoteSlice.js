import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchVotes = createAsyncThunk("Vote/fetchVotes", async () => {
  const response = {};
  return { votes: response.data };
});

const VoteSlice = createSlice({
  name: "Vote",
  initialState: {
    votes: [],
  },
  reducers: {},
});

export const {} = VoteSlice.actions;

export default VoteSlice.reducer;
