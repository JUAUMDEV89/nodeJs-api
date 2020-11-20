const express = require('express');
const UserController = require('./app/Controllers/UserController');

const router = express.Router();

router.post('/user', UserController.store);
router.get('/user', UserController.index);
router.get('/user/:id', UserController.show);
router.put('/user/:id', UserController.update);
router.get('/user/:id', UserController.destroy);

module.exports = router;