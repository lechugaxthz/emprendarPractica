const express = require('express');
const { saludar} = require('../controllers/usuarioController');

const router = express.Router();


router.get('/',saludar)



module.exports = router