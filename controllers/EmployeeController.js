const Employee = require('../models/Employee');
const { response } = require('express');

//show all employees
const index = function(req,res){
    Employee.find()
            .then(function(data){
                res.json({
                    data
                })
            })
            .catch(function(err){
                res.json({message:'something went wrong!'})
            })
}

const store = function(req,res){
    let employee = new Employee({
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    })
    employee.save()
            .then(function(data){
                res.json({messgae:'employe was created'})
            })
            .catch(function(err){
                res.json({message:'something went wrong!'})
            })
}


//updating the data

const update = function(req,res){
    let employid = req.body.employid

    let updateddata = {
        name:req.body.name,
        designation:req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age
    }

    Employee.findByIdAndUpdate(employid,{$set:updateddata})
            .then(function(data){
                res.json({message:'Employee data has changed'})
            })
            .catch(function(err){
                res.json({message:'something went wrong!'})
            })


}


module.exports = {index,store,update}

