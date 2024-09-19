import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    reservations: { type: Array, default: [] },
})

export default mongoose.model("User", UserSchema);