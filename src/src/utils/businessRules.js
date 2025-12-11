const moment = require('moment');


exports.isLunchTime = () => {
const start = process.env.LUNCH_START || '13:00';
const end = process.env.LUNCH_END || '14:00';
const now = moment();
const s = moment(start, 'HH:mm');
const e = moment(end, 'HH:mm');
return now.isBetween(s, e);
};