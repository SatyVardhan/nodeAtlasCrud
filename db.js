const mongoose = require('mongoose');
const connectDB= async () => {


mongoose.connect("mongodb+srv://adurthisatya619:G9H7XQhv3c4ftop6@sulemancluster.tewcjdv.mongodb.net/testLogin?retryWrites=true&w=majority");

}

module.exports = connectDB;