const Joi = require('joi');


exports.generateTokenSchema = Joi.object({
category: Joi.string().optional(),
});


exports.nextTokenSchema = Joi.object({
counterId: Joi.string().required()
});


exports.serveSchema = Joi.object({
tokenNumber: Joi.number().required(),
counterId: Joi.string().required()
});


exports.skipSchema = Joi.object({
tokenNumber: Joi.number().required(),
counterId: Joi.string().required()
});