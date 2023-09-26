const authRouter = require('./routes/auth.js');
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware 
app.use(express.json());
app.use(cors());


// // Routes
app.use('/api/auth', authRouter);
// app.use('/api/solicitudes', dashboardRouter);

module.exports = app;