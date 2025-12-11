require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/routes/auth');
const tokenRoutes = require('./src/routes/tokens');
const errorHandler = require('./src/middlewares/errorHandler');


const app = express();
app.use(express.json());


connectDB();


app.use('/api/auth', authRoutes);
app.use('/api/tokens', tokenRoutes);


app.use(errorHandler);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));