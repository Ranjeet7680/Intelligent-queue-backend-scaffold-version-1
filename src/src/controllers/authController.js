const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');


const createToken = (payload, secret, expiresIn) => jwt.sign(payload, secret, { expiresIn });


exports.login = async (req, res, next) => {
try {
const { email, password } = req.body;
const user = await User.findOne({ email });
if (!user) return res.status(401).json({ message: 'Invalid credentials' });


const match = await bcrypt.compare(password, user.password);
if (!match) return res.status(401).json({ message: 'Invalid credentials' });


const accessToken = createToken({ userId: user._id, role: user.role, counterId: user.counterId }, process.env.JWT_ACCESS_SECRET, process.env.ACCESS_TOKEN_EXPIRES_IN);
const refreshToken = createToken({ userId: user._id }, process.env.JWT_REFRESH_SECRET, process.env.REFRESH_TOKEN_EXPIRES_IN);


// Optionally store refresh tokens in DB for revocation


res.json({ accessToken, refreshToken, user: { id: user._id, name: user.name, role: user.role } });
} catch (err) { next(err); }
};