const express=require('express');
const routes=express.Router();
const controller=require('../Controller/controller');
routes.route('/login').post(controller.login);
routes.route('/register').post(controller.register);
routes.get('/getAllUseres',controller.getAllUseres);
module.exports=routes;