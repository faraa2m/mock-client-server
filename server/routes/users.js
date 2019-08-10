const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');

router.post('/create', userController.create);
router.get('/find/:id', userController.find);

module.exports = router;