const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
// Route file
const bootcamps = require('./routes/bootcamps');

// Load en vars
dotenv.config({ path: './config/config.env' });

const app = express();

// logger midelware function
app.use(logger);

// Mount router
app.use('/api/v1/bootcamps', bootcamps);

// liten to server
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} snode on port ${PORT}`)
);
