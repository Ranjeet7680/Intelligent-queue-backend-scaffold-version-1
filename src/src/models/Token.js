const mongoose = require('mongoose');


const tokenSchema = new mongoose.Schema({
number: { type: Number, required: true },
category: { type: String, default: 'general' },
date: { type: String, required: true }, // YYYY-MM-DD - same-day scoping
status: { type: String, enum: ['waiting','serving','served','skipped'], default: 'waiting' },
counterId: { type: String, default: null },
createdAt: { type: Date, default: Date.now }
});


tokenSchema.index({ date: 1, number: 1 }, { unique: true });


module.exports = mongoose.model('Token', tokenSchema);