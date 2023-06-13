const mongoose  = require("mongoose")

let authSchema = mongoose.Schema({
    email:String,
    password:String,
})

module.exports = mongoose.model("auth",authSchema)