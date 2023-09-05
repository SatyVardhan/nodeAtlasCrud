const mongoose = require('mongoose');
const connectDB= async () => {


    await    mongoose.connect("mongodb://0.0.0.0:27017/e-comm");

}

module.exports = connectDB;