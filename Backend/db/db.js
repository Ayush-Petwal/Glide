const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    mongoose.connect(process.env.MONGODB_URI).
    then(() => {
        console.log('Database connected')
    }).catch((err) => console.log(err));
}

module.exports = connectDB;