import mongoose from "mongoose";

const VoteListSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    voteElements: [
      {
        name: {
          type: String,
        },
        count: {
          type: Number,
          default: 0,
        },
        voted: [{ ref: "User", type: mongoose.Schema.Types.ObjectId }],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Votelist", VoteListSchema);
