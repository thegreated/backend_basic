const User =  require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const register = (req,res,next) => {

    bcrypt.hash(req.body.password, 10 , (err,hashedPass) => {
        if(err) {
            res.json({
                error: err
            })
        }

        let user = User({
            name : req.body.name,
            username : req.body.username,
            email: req.body.email,
            password: hashedPass
        })
        user.save()
        .then(user=>{
            res.json({
                message: 'User Added Successfully'
            })
        })
        .catch(error=> {
            res.json({
                message: 'An error occured'
            }) 
        })
    })
    
}

const login = (req , res, next) => {
    let username = req.body.username
    let password = req.body.password

    User.findOne({ $or: [{ email: username}, {name: username}]})
    .then(user => {
        if(user) {
            bcrypt.compare(password,  user.password, (err,result) =>{
                if(err){
                    res.json({
                        error:err
                    })
                }if(result){
                    let token = jwt.sign({name: user.name} , 'AzT2321' , {expiresIn: '1h'});
                    res.json({
                        message: 'Login Successs',
                        token 
                    })
                }
                else{
                    res.json({
                        message: 'Password does not matched!'
                    })
                }
            });
        }else{
            res.json({
                message: 'No user found!'
            })
        }
    })
}


module.exports = {
    register, login
}