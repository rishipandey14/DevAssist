import mongoose from "mongoose";
import { env } from "./env.js";


export const connectDb = async () => {
    try {
        await mongoose.connect(env.MONGO_URI);
        console.log("Database connected Successfully");
    } catch (error) {
        console.log("Database connection failed: ", error);
        process.exit(1);
    }
};