import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI 

const startServer = async () => {
    try{
        await mongoose.connect(MONGO_URI)
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        })
    } catch(eror) {
        console.log('Error connecting to the database', error);
    }
}

startServer();