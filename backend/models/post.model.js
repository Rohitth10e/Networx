import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    body:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: Date.now
    },
    media:{
        type: String,
        default: ''
    },
    active:{
        type: Boolean,
        default: true
    },
    fileType:{
        type: String,
        default: ''
    }
})

const Post = mongoose.Model('Post', postSchema);
export default Post;    