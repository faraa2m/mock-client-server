const express = require('express');
const router = express.Router();

const LoginController = require('../controllers/login');

router.post('/login', LoginController.login);
router.post('/logout', LoginController.logout);
router.post('/register', LoginController.register);

module.exports = router;
