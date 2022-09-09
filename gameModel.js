import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true
    },

    type:{
        type: String,
        required: true
    },

    version:{
        type: Number
    }
})

export default mongoose.model('game', gameSchema);