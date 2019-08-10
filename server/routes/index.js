var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', index);
const documentController = require('../controllers/document');

router.get('/all', documentController.findAll);

function index(req,res,next) {
  res.render('index', { title: 'Express' });
}

module.exports = router;
