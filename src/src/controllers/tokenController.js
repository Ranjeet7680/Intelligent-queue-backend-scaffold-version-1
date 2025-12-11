const Token = require('../models/Token');
const tokenService = require('../services/tokenService');


exports.generateToken = async (req, res, next) => {
try {
const { category='general' } = req.body;
const date = tokenService.getTodayString();
const nextNumber = await tokenService.getNextNumberForDate(date);


const token = await Token.create({ number: nextNumber, category, date });
res.status(201).json({ token });
} catch (err) { next(err); }
};


exports.nextToken = async (req, res, next) => {
try {
const { counterId } = req.body;
const result = await tokenService.assignNextToken(counterId, req.user);
res.json(result);
} catch (err) { next(err); }
};


exports.serveToken = async (req, res, next) => {
try {
const { tokenNumber, counterId } = req.body;
const result = await tokenService.serveToken(tokenNumber, counterId, req.user);
res.json(result);
} catch (err) { next(err); }
};


exports.skipToken = async (req, res, next) => {
try {
const { tokenNumber, counterId } = req.body;
const result = await tokenService.skipToken(tokenNumber, counterId, req.user);
res.json(result);
} catch (err) { next(err); }
};