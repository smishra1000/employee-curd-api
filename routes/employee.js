const express = require("express");

const router = express.Router();

const Employee = require("../models/employee")


// create employee data in db 

router.post("/createEmployee",function(req,res){
    let {empName,age,address,company} = req.body
    let emp = new Employee({empName,age,address,company,status:true})
    console.log(emp)

    emp.save().then(function(data){
        res.send(data)
    }).catch(function(err){
        res.send(err)
    })
})

router.get("/getEmployee",function(req,res){
    Employee.find({}).then(function(data){
        res.send(data)
    }).catch(function(err){
        res.send(err)
    })
})

router.delete("/deleteEmp/:id",function(req,res){
    console.log(req.params.id)
    Employee.deleteOne({"_id":Object(req.params.id)}).then(function(data){
        res.send(data)
    }).catch(function(err){
        res.send(err)
    })
})

router.put("/updateEmp/:id",function(req,res){
    Employee.findByIdAndUpdate(req.params.id,{...req.body}).then(function(data){
        res.send(data)
    }).catch(function(err){
        res.send(err)
    })
})

router.get("/countEmp",function(req,res){
    Employee.count({}).then(function(data){
        console.log(data)
        res.send({count:data})
    }).catch(function(err){
        res.send(err)
    })
})

router.get("/getActiveEmp",function(req,res){
    Employee.find({"status":true}).then(function(data){
        console.log(data)
        res.send(data)
    }).catch(function(err){
        res.send(err)
    })
})




//employee/deleteEmp/647618fa9289b4ba6f661876



module.exports = router



