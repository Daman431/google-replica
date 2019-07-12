const express = require('express')
const path = require('path')
const app = express()
require('./db/mongoose')
const User = require('./models/user')

//Serving Static files
app.use(express.static(path.join(__dirname,'./public')))
app.use(express.json())

//Setting Template engine
app.set('view engine','hbs')


app.get('/home',(req,res)=>{
    res.render('index')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/loginpass',(req,res)=>{
    res.render('login_pass',{

    })
})
app.get('/New',(req,res)=>{
    res.render('accounts')
})

app.post('/user',(req,res)=>{
    const user = new User(req.body)
    User.findOne({'email':req.body.email},(error,result)=>{
        if(result){
           return res.send("User Already Exist!")
        }
            user.save().then(()=>{
                res.send('success')
            }).catch((e)=>{
                console.log(e)
                res.send("error")
            })
    })
})


app.post('/emailcheck',(req,res)=>{
    User.findOne({'email':req.body.email},(error,result)=>{
        if(result){
            return res.send(result);
        }
        res.send("User does not exist!")
    })
})
app.post('/passcheck',(req,res)=>{
    User.findOne({email:req.body.email},(error,result)=>{
        if(result.password === req.body.password){
            return res.send("welcome")
        }
        else{
           return res.send("Wrong password!")
        }
    })
})
app.listen(3030)