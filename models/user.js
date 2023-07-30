import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        username: { type: String },
        adr: { type: String }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;
