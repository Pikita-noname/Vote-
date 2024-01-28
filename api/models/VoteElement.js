import mongoose from "mongoose";

 const VoteElementSchema = new mongoose.Schema({

    voteElement:
        {
            name: {
                type:String,
                required: true,
            },
            count: {
                type: Number,
            },
            voted: [{
                token: {
                    type: String,
                    required: true
                },
                color: {
                    type: String,
                    reqired: true
                }
            }]
        },
    }
)

export default mongoose.model('VoteElement', UserSchema);