const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const validate = require('../middlewares/validate');
const { loginSchema } = require('../validators/authSchemas');


router.post('/login', validate(loginSchema), login);


module.exports = router;