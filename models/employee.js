const mongoose = require("mongoose")

let empSchema = mongoose.Schema({
    empName:String,
    age:String,
    address:String,
    company:String,
    status:Boolean
})


module.exports =  mongoose.model("employee",empSchema)

// module.exports = Employee





