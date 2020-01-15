'use strict';

const express = require('express');
const activateAccount = require('../controller/account/activate-account');
const createAccountController = require('../controller/create-account-controller');
const login = require('../controller/login-controller');

const router = express.Router();

router.post('/account', createAccountController);
router.post('/account/login', login);
router.get('/account/activate', activateAccount);


module.exports = router;