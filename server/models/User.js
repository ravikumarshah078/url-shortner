import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        token: {
            type: String,
        },
    }, 
    {
        timestamps: true
    }
);

const User = mongoose.model("User", UserSchema);
export default User;