import mongoose from "mongoose";

const EndpointSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            maxLength: 50
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel",
            required: true,
        },
        slug: {
            type: String,
            required: true,
            maxLength: 8,
            unique: true
        },
        method: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true,
    }
);

export const Endpoint = mongoose.model("Endpoint", EndpointSchema);