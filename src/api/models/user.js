import mongoose from "mongoose";
const { Schema } = mongoose;
const UserSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
    },
    passsword: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Users", UserSchema);
