const mongoose = require('mongoose');
const connectDB= async () => {


    await    mongoose.connect("mongodb+srv://username:password@sulemancluster.tewcjdv.mongodb.net/testLogin?retryWrites=true&w=majority");

}

module.exports = connectDB;