import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711152000&semt=sph"
    }
},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;