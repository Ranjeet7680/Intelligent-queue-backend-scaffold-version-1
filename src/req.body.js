// src/routes/test-validate.js
const express = require('express');
const router = express.Router();
const Joi = require('joi');
const validate = require('../middlewares/validate');

const schema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().min(0).optional()
});

router.post('/test-validate', validate(schema), (req, res) => {
  // Echo back sanitized body so you can see what passed validation
  res.json({ success: true, body: req.body });
});

module.exports = router;
