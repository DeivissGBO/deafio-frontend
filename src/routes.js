const express = require('express');
const UserController = require('../src/controller/UserControoler');


const routes = express.Router();

routes.post('/user', UserController.store);
routes.get('/', UserController.index)


module.exports = routes;