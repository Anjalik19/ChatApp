const model = require('../Models/models');
exports.login = (req, callback) => {
    model.login(req, (err, data) => {
        if (err) {
            callback(err);
        }
        else {
            callback(null, data);
        }
    })
}

exports.register = (req, callback) => {
    try {
       
        model.register(req, (err, data) => {
            if (err) {
                callback(err);
            }
            else {
                callback(null, data);
            }
        })
    } catch (err) {
        res.send(err);
    }
}
exports.forgot=(req,callback)=>{
    try{
        
    model.forgot(req,(err,data)=>{
        if(err){
            callback(err);
        }
        else{
            callback(null,data);
        }
    })
}catch (err) {
    res.send(err);
}
}

exports.getAllUseres = (req, callback) => {
    try {
        model.getAllUseres(req, (err, data) => {
            if (err) {
                callback(err);
            }
            else {
                callback(null, data);
            }
        })
    } catch (err) {
        res.send(err);
    }
}