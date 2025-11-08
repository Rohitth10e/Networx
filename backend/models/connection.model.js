import mongoose from 'mongoose';

const connectionSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    connectionId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    statusAccepted:{
        type: Boolean,
        default: false
    }
})

const Connection = mongoose.model('Connection', connectionSchema);

export default Connection;