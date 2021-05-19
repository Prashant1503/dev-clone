const route = require('express').Router();

/** controller  */
const authController = require('../../controllers/auth/Auth.controller');


/**
 * @api : /signup
 * @param : {name,email,password}
 * @description : create new user
 */
route.post('/signup', authController.registerUser);


/**
 * @api : /signin
 * @param : {email,password}
 * @description : sign-in existing user
 */
route.post('/signin', authController.loginUser);


/** export */
module.exports = route;