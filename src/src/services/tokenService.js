const Token = require('../models/Token');
const moment = require('moment');
const business = require('../utils/businessRules');


exports.getTodayString = () => moment().format('YYYY-MM-DD');


exports.getNextNumberForDate = async (date) => {
// Find max number for date and +1
const last = await Token.findOne({ date }).sort({ number: -1 }).lean();
return last ? last.number + 1 : 1;
};


exports.assignNextToken = async (counterId, user) => {
// Respect lunch break
if (business.isLunchTime()) return { status: 'paused', message: 'Service paused for lunch' };


const date = this.getTodayString();


// Find earliest waiting token (FIFO)
const token = await Token.findOneAndUpdate({ date, status: 'waiting' }, { status: 'serving', counterId }, { sort: { createdAt: 1 }, new: true });
if (!token) return { status: 'empty', message: 'No waiting tokens' };
return { status: 'ok', token };
};


exports.serveToken = async (tokenNumber, counterId, user) => {
if (business.isLunchTime()) return { status: 'paused', message: 'Service paused for lunch' };
const date = this.getTodayString();
const token = await Token.findOneAndUpdate({ date, number: tokenNumber, counterId }, { status: 'served' }, { new: true });
if (!token) throw new Error('Token not found or not assigned to this counter');
return { status: 'ok', token };
};


exports.skipToken = async (tokenNumber, counterId, user) => {
const date = this.getTodayString();
const token = await Token.findOneAndUpdate({ date, number: tokenNumber, counterId }, { status: 'skipped' }, { new: true });
if (!token) throw new Error('Token not found or not assigned to this counter');
return { status: 'ok', token };
};