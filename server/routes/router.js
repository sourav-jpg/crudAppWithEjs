const express = require('express')
const route = express.Router();
const services = require('../services/render')
const controller = require("../controller/controller");


route.get('/',services.homeRoutes);

route.get('/add-user',services.add_user);

route.get('/update-user',services.update_user);


//API 

route.post('/api/users',controller.createUser);
route.get('/api/getUser',controller.getUser);
route.get('/api/getUserById/:id',controller.getUserById);
route.put('/api/user/:id',controller.updateUser);
route.delete('/api/deleteUser/:id',controller.deleteUser);




module.exports =route