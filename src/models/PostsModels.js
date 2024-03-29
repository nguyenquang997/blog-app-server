import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
        default: 'Anonymous'
    },
    // attachment: String,
    imgPart: String,
    likeCount: {
        type: Number,
        default: 0,
    }
}, { timestamps: true })

export const PostModels = mongoose.model('Post', schema)