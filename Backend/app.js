const dotenv = require('dotenv');
dotenv.config(); 

const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

const connectDB = require('./db/db');
connectDB()

const userRoutes = require('./routes/user.routes');
const captionRoutes = require('./routes/caption.routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req , res) => {
  res.send('Hello World');
})

app.use('/users', userRoutes);
app.use('/caption', captionRoutes)

module.exports = app;