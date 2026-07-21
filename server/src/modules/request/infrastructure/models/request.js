import mongoose from "mongoose";


const requestSchema = new mongoose.Schema(
    {
        endpointId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Endpoint",
            required: true,
            index: true,
        },
        
        method: {
            type: String,
            required: true,
            enum: ["GET", "POST", "PATCH", "PUT", "DELETE"],
        },

        path: {
            type: String,
            required: true,
        },
        
        headers: {
            type: mongoose.Schema.Types.Mixed,
            default: {},
        },

        query: {
            type: mongoose.Schema.Types.Mixed,
            default: {},
        },

        body: {
            type: mongoose.Schema.Types.Mixed,
            default: null,
        },

        rawBody: {
            type: String
        },

        ip: {
            type: String,
        },

        contentType: {
            type: String
        },

        userAgent: {
            type: String,
        },

        bodySize: {
            type: Number
        },

        receivedAt: {
            type: Date,
            default: Date.now
        }
    },{
        timestamps: true
    }
);

export const Request = mongoose.model("Request", requestSchema);