const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://gofood:123@cluster0.cahbfl3.mongodb.net/NEWSAPP?retryWrites=true&w=majority')
    .then(() => {
        console.log("mongodb connected");

    })
    .catch(() => {
        console.log("failed");
    })

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("User", UserSchema)




