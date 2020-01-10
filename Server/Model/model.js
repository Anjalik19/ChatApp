const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const userData = new Schema({
    firstName:
    {
        type: String,
        required: true
    },
    lastName:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true,
        unique: true
    },
})
let register = mongoose.model('users', userData);
exports.login = (req, callback) => {
    try {
        console.log(req.body.email)
        register.findOne({
            "email": req.body.email,
        }, (err, data) => {
            console.log(data._id)
            if (data) {
                console.log(req.body.password + '' + data.password);
                bcrypt.compare(req.body.password, data.password, (err, sucess) => {
                    console.log(sucess)
                    if (sucess) {
                        callback(null, data)
                   }
                    else callback("email and  password misMatch");
                })
            } else callback("email and password misMatch" + err);
        })
    } catch (err) {
        res.send(err);
    }
}

exports.register = (req, callback) => {
    try {
        console.log("data is", req.body)
        register.findOne({
            "email": req.body.email
        }, (err, data) => {
            if (data) callback("user exists");
            else {
                bcrypt.hash(req.body.password, 10, (err, encrypted) => {
                    console.log("cbbc", encrypted)
                    var userDetailes = new register({
                        "firstName": req.body.firstName,
                        "lastName": req.body.lastName,
                        "email": req.body.email,
                        "password": encrypted
                    })
                    userDetailes.save((err, data) => {
                        if (err) callback(err);
                        else {
                           callback(null, data);
                        }
                   })
                })
           }
        })
    } catch (err) {
        res.send(err);
    }
}
exports.forgot=(req,callback)=>{
    try{
    register.findOne({
        "email":req.body.email
    },(err,data)=>{
            if (data) callback(null,data);
            else callback(err);
    })

}catch (err) {
res.send(err);
}
}
exports.getAllUseres = (req, call) => {
    try {
        register.find({}, (err, data) => {
            if (err) {
                call(err);
            }
            else {
                call(null, data);
            }
        })
    } catch (err) {
        res.send(err);
    }
}