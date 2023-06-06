const express = require("express");

const app = express();
const cors = require("cors")

const mongoose = require("mongoose")

const fileUpload = require("express-fileupload")

mongoose.connect("mongodb://localhost:27017/mern-login-signup")

const bodyParser = require("body-parser")
app.use(cors())
app.use(bodyParser.json())

const employeeRoutes = require("./routes/employee")
app.use(fileUpload());
app.use("/uploads",express.static("uploads"))
app.use("/employee",employeeRoutes)



app.listen(7000,function(){
    console.log("server started")
})