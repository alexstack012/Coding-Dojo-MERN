const mongoose = require("mongoose")
const Schema = mongoose.Schema
const JokeSchema = new mongoose.Schema({
        setup: {
            type: String,
            require: [true, "This is a required field!"],
            minlength: [10, "Setup must be at least 10 characters long"]
        },
        punchline: {
            type: String,
            require: [true, "This is a required field!"],
            minlength: [3, "Punchline must be at least 3 characters long"]
        }
    },
    {timestamps: true}
)
const Joke = mongoose.model("joke", JokeSchema)
module.exports = Joke