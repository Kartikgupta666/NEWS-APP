const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://gofood:123@cluster0.cahbfl3.mongodb.net/gofoodmern-m?retryWrites=true&w=majority')
    .then(() => {
        console.log("mongodb connected");

    })
    .catch(() => {
        console.log("failed");
    })



const newschema = new mongoose.Schema({
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

const collection = mongoose.model("collection", newschema)
module.exports = collection;



