const express = require('express');
const router = express.Router();
const passport = require('passport');

const userController = require('../Controller/user');



router.get('/login-register', userController.signup);
router.get('/login-register', userController.signin);

router.post('/login-register/create', userController.create);

router.post('/login-register/create-session', passport.authenticate('local', {
    failureRedirect: '/login-register'
}), userController.createSession);


router.get('/sign-out', userController.destroySession);


module.exports = router;