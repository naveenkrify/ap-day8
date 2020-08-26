const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const EmployeeRoute = require('./routes/employee')

mongoose.connect('mongodb://localhost:27017/krify', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection

// db.on('error',function(err){

//     console.log(err)
// })

// db.once('open',function(){
//     console.log('sucessfully connnected to mongodb')
// })

//const Cat = mongoose.model('Cat', { name: String, age:Number, surname:String });

// const naveen = new Cat({name:'sai',age:25,surname:'kumar'});

// naveen.save().then(function(){
//     console.log('saved')
// })


// const user = mongoose.model('User',{username:String,password:String,exp:Number})

// const naveen = new user({username:"naveen",password:"krify",exp:5})

// naveen.save().then(function(){
//     console.log("saved")
// })

const app = express()

app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use('/',EmployeeRoute)

app.listen(3000,function(){
    console.log('app was running')
})






