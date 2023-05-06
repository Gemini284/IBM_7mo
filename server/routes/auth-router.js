const express = require('express');
const authCtrl = require('../controllers/auth-ctrl');
const router = express.Router();

router.post('/signin', authCtrl.signin);

module.exports = router;