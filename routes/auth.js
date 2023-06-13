const express = require("express")

const router = express.Router();

const AuthModel = require("../models/auth")


router.post("/register", function (req, res) {

    //1> check that email already exist or not 
        // if exist the send error like email already esixt
        // if not then create the email and password in databse
    
    AuthModel.findOne({email:req.body.email}).then(function(user){
        if(user){
            res.send("email already exist")
        }else {
            let auth = new AuthModel(req.body)
            auth.save().then(function (data) {
                res.send("registration done sucessfully")
            }).catch(function (err) {
                res.send(err)
            })
        }
    })
   
})

router.post("/login", function (req, res) {
    //step 1 first check user present or not using entered email 
    // step 2 if user pesent then cehck for his password 
    //if password match then login success
    //else
    // invalid credentials
    // step 3 if not presnt 
    //then show user not exit

    AuthModel.findOne({ email: req.body.email }).then(function(user) {
        if (user) {
            console.log(user.password, req.body.password)
            if (user.password === req.body.password) {
                res.send("login successfully")
            } else {
                res.send("invalid credentilas")
            }
        } else {
            res.send("user not exist")
        }
    })

})

module.exports = router
