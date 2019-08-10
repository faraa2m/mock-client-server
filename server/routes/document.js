const express = require('express');
const router = express.Router();

const documentController = require('../controllers/document');

router.get('/all/:user', documentController.findAll);
router.post('/create', documentController.create);
router.get('/:id/find', documentController.find);
router.put('/:id/update', documentController.update);
router.delete('/:id/delete', documentController.remove);

module.exports = router;