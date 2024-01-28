import mongoose from "mongoose";

 const VoteListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    voteElement: [
        {
            name: {
                type:String,
                required: true,
            },
            count: {
                type: Number,
            },
            voted: [{

            }]
        }
    ],
    passwordHash: {
        type: String,
        required: true,
    }
    },
    {
        timestamps: true,
    }
)

export default mongoose.model('Votelist', UserSchema);