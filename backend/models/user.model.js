import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    active:{
        type: Boolean,
        default: true
    },
    password:{
        type: String,
        required: true
    },
    profilePicture:{
        type: String,
        default: 'default_profile.png'
    },
    coverPicture:{
        type: String,
        default: 'default_cover.jpg'
    },
    created_at:{
        type: Date,
        default: Date.now
    }
})

const User = new mongoose.Model('User', userSchema);
export default User;